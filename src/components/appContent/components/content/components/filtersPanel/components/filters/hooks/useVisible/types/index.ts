export type UseVisibleProps = {
  onBlur?: () => void;
};

export type UseVisible<TElement extends HTMLElement> = {
  isVisible: boolean;
  handleSetVisible: (value: boolean) => void;
  containerRef: React.RefObject<TElement | null>;
  handleToggleVisible: () => void;
};
