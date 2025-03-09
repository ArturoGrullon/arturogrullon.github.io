import { Input } from "pixel-retroui";
import { AgeRangeInputProps } from "./types";
import { MIN_AGE, MAX_AGE, INPUT_STEP } from "./constants";

export const AgeRangeInput = ({ label, onChange }: AgeRangeInputProps) => (
  <label className="text-left flex flex-col" htmlFor={label}>
    {label}:
    <Input
      className="w-28"
      onChange={onChange}
      name={label}
      type="number"
      min={MIN_AGE}
      max={MAX_AGE}
      step={INPUT_STEP}
    />
  </label>
);
