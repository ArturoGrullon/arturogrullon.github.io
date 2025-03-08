import { ReactNode } from "react";

export type User = {
  username: string;
  password: string;
};

export type LoginWrapperProps = {
  children: (user: User) => ReactNode;
};
