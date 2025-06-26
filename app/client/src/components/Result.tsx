import { FunctionComponent } from "react";
import type { AIResult } from "backend/schemas";
import FactsCheck from "./results/FactsCheck";
import WritingAssistant from "./results/WritingAssistant";
import SeoSuggestions from "./results/SEOSuggestions";
import SimilarContent from "./results/SimilarContent";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

const Component: FunctionComponent<{
  result: AIResult;
  onClickBack: () => void;
}> = ({ result, onClickBack }) => {
  const { factsCheck, writingAssistant, seoSuggestions, similarContent } =
    result;
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={onClickBack}
        className="-ml-2 flex gap-1 items-center text-sm opacity-60
        hover:opacity-80 cursor-pointer"
      >
        <ChevronLeft />
        Back
      </button>
      {factsCheck && <FactsCheck result={factsCheck} />}
      {writingAssistant && <WritingAssistant result={writingAssistant} />}
      {seoSuggestions && <SeoSuggestions result={seoSuggestions} />}
      {similarContent && <SimilarContent result={similarContent} />}
    </div>
  );
};

export default Component;
