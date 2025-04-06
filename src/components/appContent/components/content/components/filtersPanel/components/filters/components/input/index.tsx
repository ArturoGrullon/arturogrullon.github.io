import { Input as PixelInput } from "pixel-retroui";
import { useInputValue } from "./hooks/useInputValue";
import { InputProps } from "./types";

export const Input = ({
  label,
  onChange,
  onPressEnter,
  placeholder,
  className,
  type = "text",
  value,
  ...pixelInputProps
}: InputProps) => {
  const { handleOnChange, inputValue, handleOnKeyDown } = useInputValue({
    onChange,
    onPressEnter,
    value,
  });

  return (
    <label className="text-left flex flex-col" htmlFor={label}>
      {label}:
      <PixelInput
        {...pixelInputProps}
        className={className}
        value={inputValue}
        onChange={({ target: { value } }) => handleOnChange(value)}
        name={label}
        type={type}
        onKeyDown={({ key, target }) =>
          onPressEnter && handleOnKeyDown(key, target)
        }
        placeholder={placeholder}
      />
    </label>
  );
};
