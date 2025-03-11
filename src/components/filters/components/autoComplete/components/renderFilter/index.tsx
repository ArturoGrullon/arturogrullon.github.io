import { Button } from "pixel-retroui";

export function RenderFilter(props) {
  return (
    <div>
      <h2>{props.label}:</h2>
      <Button
        onClick={() => props.handleRemoveFilter(props.label, props.value)}
      >{`${props.value} X`}</Button>
    </div>
  );
}
