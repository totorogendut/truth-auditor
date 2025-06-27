import { FunctionComponent } from "react";
import type { AIResult } from "backend/schemas";
import { CheckCircle, XCircle } from "lucide-react";
import { Separator } from "../ui/separator";

const Component: FunctionComponent<{
  result: Exclude<AIResult["writingAssistant"], undefined>;
}> = ({ result: { score, verdict, conclusion, suggestions } }) => {
  return (
    <div className="border-black/40 ">
      <div className="flex w-full justify-between items-center">
        <strong className="text-xl flex gap-2 items-center">
          Writing Quality
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
      <small className="mt-2 mb-1 opacity-80 block">Suggestions</small>
      <div className="grid grid-cols-2 text-sm gap-2">
        {suggestions.map((data) => (
          <>
            <div
              className="basis-[49%] flex flex-col leading-[1.1] p-2 rounded-md
                bg-slate-200/70"
            >
              <strong className="font-medium">{data.value}</strong>
              <em className="mt-2 opacity-80">"{data.about}"</em>
            </div>
          </>
        ))}
      </div>
      <Separator className="my-5" />
    </div>
  );
};

export default Component;
