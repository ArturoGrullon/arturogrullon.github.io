export type UseVisibleProps<T> = {
  selectedOptionsRef: React.RefObject<T[]>;
  handleResetSelectedOptions: () => void;
  onBlur?: (options: T[]) => void;
};
