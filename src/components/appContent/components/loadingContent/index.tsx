import { Card } from "pixel-retroui";
import { useState } from "react";
import dog from "@/assets/dog.gif";
import { getColor } from "@/utils/getColor";

export const LoadingContent = () => {
  const [message, setMessage] = useState("");
  const delay = 60000; //60s

  setTimeout(() => {
    setMessage("Might need to refresh the page");
  }, delay);

  return (
    <Card
      bg={getColor("primary")}
      borderColor={getColor("surface")}
      className="h-[20rem] w-[30rem] self-center items-center flex flex-col justify-center"
    >
      <img width={200} src={dog} alt="test" />
      <h4 className="text-2xl text-white">Fetching dogs...</h4>
      <p className="text-white">{message}</p>
    </Card>
  );
};
