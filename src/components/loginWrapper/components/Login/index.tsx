import { Button, Card, Input } from "pixel-retroui";
import { motion } from "motion/react";
import { usePassword } from "../../hooks/usePassword";
import { LoginProps } from "./types";

export const Login = ({ handleLogin }: LoginProps) => {
  const { passwordInputType, passwordInputIcon, togglePasswordVisibility } =
    usePassword();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className="justify-center items-center flex" bg="gray">
        <form
          onSubmit={handleLogin}
          className="flex p-20 flex-col gap-8 justify-center items-center"
        >
          <Input
            className="w-[20rem]"
            type="text"
            name="username"
            placeholder="Username"
          />
          <Input
            className="w-[20rem]"
            name="password"
            placeholder="Password"
            type={passwordInputType}
            icon={passwordInputIcon}
            onIconClick={togglePasswordVisibility}
          />
          <Button type="submit" className="w-28">
            Login
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};
