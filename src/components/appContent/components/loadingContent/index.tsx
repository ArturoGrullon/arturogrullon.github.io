import { Card } from "pixel-retroui";
import { useState } from "react";
import dog from "@/assets/dog.gif";

export const LoadingContent = () => {
  const [message, setMessage] = useState("");
  const delay = 30000; //30s

  setTimeout(() => {
    setMessage("Might need to refresh the page");
  }, delay);

  return (
    <Card className="h-[20rem] w-[30rem] items-center flex flex-col justify-center">
      <img width={200} src={dog} alt="test" />
      <h4 className="text-2xl">Fetching dogs...</h4>
      <p>{message}</p>
    </Card>
  );
};
