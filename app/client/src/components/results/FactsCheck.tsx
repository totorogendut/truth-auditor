import { FunctionComponent } from "react";
import type { AIResult } from "backend/schemas";
import { CheckCircle, XCircle } from "lucide-react";
import { Separator } from "../ui/separator";

const Component: FunctionComponent<{
  result: Exclude<AIResult["factsCheck"], undefined>;
}> = ({ result: { score, verdict, conclusion, factsCheckSource } }) => {
  return (
    <div className="border-black/40 ">
      <div className="flex w-full justify-between items-center">
        <strong className="text-xl flex gap-2 items-center">
          Facts Check{" "}
          {verdict ? (
            <CheckCircle
              size={20}
              color="var(--color-green-500)"
            />
          ) : (
            <XCircle
              size={20}
              color="var(--color-red-500)"
            />
          )}
        </strong>
        <div
          className="px-2 py-0.5 rounded-md bg-blue-200
           text-blue-600"
        >
          <strong className="font-semibold mr-1">Score</strong> {score}
        </div>
      </div>
      <p className="opacity-80 leading-[1.1] mt-2 mb-5">{conclusion}</p>
      <div className="flex flex-wrap ">
        {factsCheckSource.map((data) => (
          <>
            <a className="basis-1/2 flex flex-col">
              <strong>{data.name}</strong>
              <span className="underline">{data.url}</span>
            </a>
          </>
        ))}
      </div>
      <Separator className="my-3" />
    </div>
  );
};

export default Component;
