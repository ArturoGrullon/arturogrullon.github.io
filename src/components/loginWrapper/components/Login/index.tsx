import { Button, Card, Input } from "pixel-retroui";
import { motion } from "motion/react";
import { LoginProps } from "./types";
import { MIN_INPUT_CHARACTERS } from "./constants";

export const Login = ({ handleLogin }: LoginProps) => (
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
          name="name"
          required
          placeholder="Username"
          minLength={MIN_INPUT_CHARACTERS}
        />
        <Input
          className="w-[20rem]"
          name="email"
          required
          placeholder="Email"
          type={"email"}
          minLength={MIN_INPUT_CHARACTERS}
        />
        <Button type="submit" className="w-28">
          Login
        </Button>
      </form>
    </Card>
  </motion.div>
);
