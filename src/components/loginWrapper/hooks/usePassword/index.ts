import { useState } from "react";

export const usePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputType = showPassword ? "text" : "password";
  const passwordInputIcon = showPassword
    ? "src/assets/hide-eye.svg"
    : "src/assets/show-eye.svg";

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return {
    passwordInputType,
    passwordInputIcon,
    togglePasswordVisibility,
  };
};
