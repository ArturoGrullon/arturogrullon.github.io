import { Input } from "pixel-retroui";
import { AgeRangeInputProps } from "./types";
import { MIN_AGE, MAX_AGE, INPUT_STEP } from "./constants";
import { useDebounce } from "../../../../utils/debounce";

export const AgeRangeInput = ({ label, onChange }: AgeRangeInputProps) => {
  const safeOnChange = onChange ?? (() => {}); // Handle possible undefined
  const debounceOnChange = useDebounce(safeOnChange, 500);

  return (
    <label className="text-left flex flex-col" htmlFor={label}>
      {label}:
      <Input
        className="w-28 "
        onChange={({ target: { value } }) => debounceOnChange?.(value)}
        name={label}
        type="number"
        min={MIN_AGE}
        max={MAX_AGE}
        step={INPUT_STEP}
      />
    </label>
  );
};
