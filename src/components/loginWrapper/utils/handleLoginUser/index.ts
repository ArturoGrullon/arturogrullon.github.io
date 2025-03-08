import { FormEvent } from "react";
import { User } from "../../types";

export const handleLoginUser =
  (setUser: (user: User) => void) =>
  (formEvent: FormEvent<HTMLFormElement>) => {
    formEvent.preventDefault();
    const formData = new FormData(formEvent.currentTarget);
    const userCredentials = Object.fromEntries(formData.entries()) as User;
    setUser(userCredentials);
  };
