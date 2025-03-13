import { InputProps as PixelInputProps } from "pixel-retroui";

export type InputProps = Omit<PixelInputProps, "onChange"> & {
  label: string;
  className?: string;
  onChange?: (value: string) => void;
  onPressEnter?: (value: string) => void;
  placeholder?: string;
};
