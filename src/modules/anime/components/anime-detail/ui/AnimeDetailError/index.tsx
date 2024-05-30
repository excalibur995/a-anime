import { Button } from "@nextui-org/react";
import { AnimeDetailErrorProps } from "./models/types";

export default function AnimeDetailError(props: AnimeDetailErrorProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {props.message || "Error Occured"}
      <Button onClick={props.onHandleBack}>{props.buttonMessage || "Back"}</Button>
    </div>
  );
}
