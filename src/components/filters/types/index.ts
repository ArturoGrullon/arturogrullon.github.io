type AutoComplete<T = string | number> = {
  label: string;
  options: T[];
  activeOptions?: T[];
  onChange?: (options: T[]) => void;
  onBlur?: (options: T[]) => void;
  getValue: (value: T) => string;
};

export type AutoCompleteProps<T> = T extends { [key: string]: unknown }
  ? AutoComplete<T>
  : Omit<AutoComplete<T>, "getValue"> & {
      getValue?: AutoComplete<T>["getValue"];
    };
