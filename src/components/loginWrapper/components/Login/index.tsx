import { Card, Input } from "pixel-retroui";
import { motion } from "motion/react";
import { LoginProps } from "./types";
import { MIN_INPUT_CHARACTERS } from "./constants";
import { getColor } from "@/utils/getColor";
import { PixelButton } from "@/components/components/pixelButton";

export const Login = ({ handleLogin }: LoginProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Card
      className="justify-center items-center flex"
      bg={getColor("surface")}
      borderColor={getColor("primary")}
    >
      <form
        onSubmit={handleLogin}
        className="flex p-20 flex-col gap-8 justify-center items-center"
      >
        <Input
          bg={getColor("secondary")}
          textColor={getColor("background")}
          className="w-[20rem]"
          type="text"
          name="name"
          required
          placeholder="Username"
          minLength={MIN_INPUT_CHARACTERS}
        />
        <Input
          bg={getColor("secondary")}
          textColor={getColor("background")}
          className="w-[20rem]"
          name="email"
          required
          placeholder="Email"
          type={"email"}
          minLength={MIN_INPUT_CHARACTERS}
        />
        <PixelButton
          bg={getColor("primary")}
          textColor={getColor("background")}
          type="submit"
          className="w-28"
        >
          Login
        </PixelButton>
      </form>
    </Card>
  </motion.div>
);
