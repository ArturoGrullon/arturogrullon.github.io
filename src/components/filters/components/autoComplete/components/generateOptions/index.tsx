import { GenerateOptionsProps } from "../../types";
import { getCurrentOption } from "../../utils/getCurrentOption";

export const GenerateOptions = <T = string | number,>({
  filteredOptions,
  getValue,
  inputValue,
  handleSelectedOption,
}: GenerateOptionsProps<T>) => {
  return filteredOptions.map((option) => {
    const currentOption = getCurrentOption(option, getValue);

    return (
      <section key={currentOption} className="flex items-center gap-4">
        <input
          className="cursor-pointer w-5 h-5 shrink-0"
          name={currentOption}
          value={inputValue}
          onChange={() => handleSelectedOption(option)}
          id={currentOption}
          type="checkbox"
        />
        <label
          className="select-none cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis"
          htmlFor={currentOption}
        >
          {currentOption}
        </label>
      </section>
    );
  });
};
