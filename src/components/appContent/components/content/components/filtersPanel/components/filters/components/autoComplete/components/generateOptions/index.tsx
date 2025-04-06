import { getColor } from "@/utils/getColor";
import { GenerateOptionsProps } from "../../types";
import { getCurrentOption } from "../../utils/getCurrentOption";

export const GenerateOptions = <T = string | number,>({
  filteredOptions,
  getValue,
  selectedOptionsRef,
  inputValue,
  handleSelectedOption,
}: GenerateOptionsProps<T>) =>
  filteredOptions.map((option, index) => {
    const currentOption = getCurrentOption(option, getValue);

    return (
      <section key={index} className="flex items-center gap-4">
        <input
          bg={getColor("secondary")}
          textColor={getColor("primary")}
          className="cursor-pointer w-5 h-5 shrink-0 bg-primary"
          name={currentOption}
          defaultChecked={selectedOptionsRef.current?.includes(option)}
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
