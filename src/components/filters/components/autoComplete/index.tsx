import { Card, Input } from "pixel-retroui";
import { AutoCompleteProps } from "../../types";
import { useVisible } from "./hooks/useVisible";
import { useSelectedOptions } from "./hooks/useSelectedOptions";
import { useInput } from "./useInput";
import { getFilteredOptions } from "./utils/getFilteredOptions";
import { GenerateOptions } from "./components/generateOptions";
import { NoResults } from "./components/noResults";
import { useDebounce } from "../../../../utils/debounce";

export const AutoComplete = <T = string | number,>({
  label,
  options,
  onChange,
  onBlur,
  getValue,
}: AutoCompleteProps<T>) => {
  const { handleSelectedOption, selectedOptions } =
    useSelectedOptions<T>(onChange);
  const { isVisible, handleSetVisible, containerRef } = useVisible(
    selectedOptions,
    onBlur
  );
  const { inputValue, handleInputValue } = useInput();

  const filteredOptions = getFilteredOptions(options, inputValue, getValue);
  const filteredOptionsCount = filteredOptions.length;
  const debounceDelay = 500;

  const debounceHandleInputValue = useDebounce(handleInputValue, debounceDelay);

  return (
    <section ref={containerRef} className="flex flex-col gap-3 relative w-full">
      <label className="text-left" htmlFor="breed">
        {label}:
      </label>
      <Input
        onClick={handleSetVisible}
        type="search"
        onChange={({ target: { value } }) => debounceHandleInputValue(value)}
        placeholder="Search"
      />
      {isVisible ? (
        <Card className="flex flex-col h-fit absolute top-[110%] z-10 p-4 gap-3 max-w-full max-h-[15rem]  overflow-y-scroll overflow-hidden">
          <NoResults {...{ filteredOptionsCount }} />
          <GenerateOptions
            {...{
              getValue,
              filteredOptions,
              inputValue,
              handleSelectedOption,
            }}
          />
        </Card>
      ) : null}
    </section>
  );
};
