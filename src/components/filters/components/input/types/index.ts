import { InputProps as PixelInputProps } from "pixel-retroui";

export type InputProps = PixelInputProps & {
  label: string;
  className?: string;
  onChange?: (value: string) => void;
  onPressEnter?: (value: string) => void;
  placeholder?: string;
};
