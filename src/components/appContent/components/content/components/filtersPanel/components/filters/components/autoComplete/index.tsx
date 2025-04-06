import { Card, Input } from "pixel-retroui";
import { AutoCompleteProps } from "../../types";
import { useSelectedOptions } from "../../../../hooks/useSelectedOptions";
import { useInput } from "./useInput";
import { getFilteredOptions } from "./utils/getFilteredOptions";
import { GenerateOptions } from "./components/generateOptions";
import { NoResults } from "./components/noResults";
import { useDebounce } from "@/utils/debounce";
import { useVisible } from "../../hooks/useVisible";
import { getColor } from "@/utils/getColor";

export const AutoComplete = <T,>({
  label,
  options,
  onChange,
  activeOptions,
  onBlur,
  getValue,
}: AutoCompleteProps<T>) => {
  //Selecting options handler
  const { handleSelectedOption, selectedOptionsRef } = useSelectedOptions<T>(
    onChange,
    activeOptions
  );

  //Options visibility
  const { isVisible, handleSetVisible, containerRef } = useVisible({
    onBlur: () => onBlur?.(selectedOptionsRef.current),
  });

  //Input value handler
  const { inputValue, handleInputValue } = useInput();

  //Filtered options
  const filteredOptions = getFilteredOptions(options, inputValue, getValue);
  const filteredOptionsCount = filteredOptions.length;

  //Debounce
  const debounceDelay = 500;
  const debounceHandleInputValue = useDebounce(handleInputValue, debounceDelay);

  return (
    <section ref={containerRef} className="flex flex-col gap-3 relative w-full">
      <label className="text-left" htmlFor="breed">
        {label}:
      </label>
      <Input
        bg={getColor("secondary")}
        textColor={getColor("primary")}
        id={label}
        name={label}
        onClick={() => handleSetVisible(true)}
        type="search"
        onChange={({ target: { value } }) => debounceHandleInputValue(value)}
        placeholder="Search"
      />
      {isVisible ? (
        <Card
          bg={getColor("surface")}
          borderColor={getColor("primary")}
          className="flex flex-col h-fit absolute top-[110%] z-10 p-4 gap-3  max-w-full max-h-[15rem]  overflow-y-scroll overflow-hidden"
        >
          <NoResults {...{ filteredOptionsCount }} />
          <GenerateOptions
            {...{
              getValue,
              selectedOptionsRef,
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
