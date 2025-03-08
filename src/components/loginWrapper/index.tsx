import { useState } from "react";
import { LoginWrapperProps, User } from "./types";
import { Login } from "./components/Login";
import { handleLoginUser } from "./utils/handleLoginUser";

export const LoginWrapper = ({ children }: LoginWrapperProps) => {
  const [user, setUser] = useState<User | null>(null);
  const handleLogin = handleLoginUser(setUser);

  if (!user) return <Login {...{ handleLogin }} />;
  return children(user);
};
