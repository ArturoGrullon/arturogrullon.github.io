import { UseDogs } from "@/components/appContent/hooks/useDogs/types";
import { User } from "../../../../loginWrapper/types";
import { UseActiveFilters } from "../components/filtersPanel/hooks/useActiveFilters/types";
import { Dog } from "@/types";

export type ContentProps = UseActiveFilters &
  UseDogs &
  Pick<User, "name"> & {
    dogs: Dog[];
  };
