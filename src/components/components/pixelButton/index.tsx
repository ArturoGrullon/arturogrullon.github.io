import { motion } from "motion/react";
import { Button, ButtonProps } from "pixel-retroui";

export const PixelButton = (props: ButtonProps) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <Button style={{ position: "unset" }} {...props} />
  </motion.div>
);
