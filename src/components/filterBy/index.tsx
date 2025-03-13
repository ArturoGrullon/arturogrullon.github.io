import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "pixel-retroui";

export const FilterBy = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="h-11 w-full">Filter By</DropdownMenuTrigger>
    <DropdownMenuContent bg="white" className="w-full bg-white z-10">
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
