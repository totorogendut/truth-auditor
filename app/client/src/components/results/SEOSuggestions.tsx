import { FunctionComponent } from "react";
import type { AIResult } from "backend/schemas";
import { CheckCircle, XCircle } from "lucide-react";
import { Separator } from "../ui/separator";

const Component: FunctionComponent<{
  result: Exclude<AIResult["seoSuggestions"], undefined>;
}> = ({
  result: {
    traffic,
    keywords,
    keywordsDifficulty,
    searchVolume,
    costPerClick,
    conclusion,
    suggestions,
  },
}) => {
  return (
    <div className="border-black/40 ">
      <div className="flex w-full justify-between items-center">
        <strong className="text-xl flex gap-2 items-center">SEO</strong>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2 mb-6 text-green-800">
        <div
          className="bg-green-200 leading-[1.1] rounded-md p-3
          flex flex-col gap-2"
        >
          <small className="opacity-70">Keywords</small>
          <strong className="font-semibold">{keywords.join(", ")}</strong>
        </div>
        <div
          className="bg-green-200 leading-[1.1] rounded-md p-3
          flex flex-col gap-2"
        >
          <small className="opacity-70">Keywords Difficulty</small>
          <strong>{keywordsDifficulty}</strong>
        </div>
        <div
          className="bg-green-200 leading-[1.1] rounded-md p-3
          flex flex-col gap-2"
        >
          <small className="opacity-70">Search Volume</small>
          <strong>{searchVolume}</strong>
        </div>
        <div
          className="bg-green-200 leading-[1.1] rounded-md p-3
          flex flex-col gap-2"
        >
          <small className="opacity-70">Monthly Traffic</small>
          <strong>{traffic}</strong>
        </div>
        <div
          className="bg-green-200 leading-[1.1] rounded-md p-3
          flex flex-col gap-2"
        >
          <small className="opacity-70">CPC (cost per click)</small>
          <strong>{costPerClick}</strong>
        </div>
      </div>
      <p className="opacity-80 leading-[1.1] mt-2 mb-3">{conclusion}</p>
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
