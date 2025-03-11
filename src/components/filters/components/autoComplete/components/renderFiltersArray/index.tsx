import { Button } from "pixel-retroui";

export function RenderFiltersArray({
  label,
  value,
  handleRemoveFilter,
  second,
}: any) {
  const [firstValueInArray, ...otherBreeds] = value;
  const otherBredsCount = otherBreeds.length;
  const hasMoreThanOne = otherBredsCount >= 1;

  return (
    <div>
      <h2>{label}:</h2>
      <section className="flex">
        <Button
          onClick={() => handleRemoveFilter(label, firstValueInArray)}
          className="w-fit h-fit whitespace-nowrap flex "
        >
          <span className="max-w-[6rem] block overflow-hidden whitespace-nowrap overflow-ellipsis">
            {firstValueInArray}
          </span>{" "}
          X
        </Button>
        {hasMoreThanOne && (
          <Button
            onClick={() => handleRemoveFilter(label, second)}
            className="w-fit h-fit whitespace-nowrap"
          >
            <span className="max-w-[5rem] overflow-hidden overflow-ellipsis">
              {otherBredsCount}
            </span>{" "}
            more X
          </Button>
        )}
      </section>
    </div>
  );
}
