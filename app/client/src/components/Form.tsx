import { AIRequest, AIResult, resultSchema } from "backend/schemas";
import { Dispatch, FunctionComponent, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import resultExample from "backend/example.json";

const apiEndpoint = "";

const Counter: FunctionComponent<{
  setResult: Dispatch<AIResult>;
}> = ({ setResult }) => {
  const text = "";
  const [loading, setLoading] = useState(false);
  const [useFactsCheck, setUseFactsCheck] = useState(true);
  const [useWritingAssistant, setUseWritingAssistant] = useState(true);
  const [useSEOSuggestions, setUseSEOSuggestions] = useState(true);
  const [useSimilarContent, setUseSimilarContent] = useState(true);

  const formDiv = (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-2">
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            checked={useFactsCheck}
            onClick={() => setUseFactsCheck(!useFactsCheck)}
            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">Facts check</p>
            <p className="text-muted-foreground text-sm">
              Let AI browse its knowledge to do some facts check and do some
              facts verification.
            </p>
          </div>
        </Label>
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            checked={useWritingAssistant}
            onClick={() => setUseWritingAssistant(!useWritingAssistant)}
            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">
              Writing Assistant
            </p>
            <p className="text-muted-foreground text-sm">
              Let AI make a suggestion to your writing.
            </p>
          </div>
        </Label>
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            checked={useSEOSuggestions}
            onClick={() => setUseSEOSuggestions(!useSEOSuggestions)}
            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">SEO Suggestions</p>
            <p className="text-muted-foreground text-sm">
              Let AI make a suggestion for optimizing SEO.
            </p>
          </div>
        </Label>
        <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
          <Checkbox
            id="toggle-2"
            checked={useSimilarContent}
            onClick={() => setUseSimilarContent(!useSimilarContent)}
            className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
          />
          <div className="grid gap-1.5 font-normal">
            <p className="text-sm leading-none font-medium">
              Simlar content on the web
            </p>
            <p className="text-muted-foreground text-sm">
              Let AI look the internet for similar content for you to make
              comparasion.
            </p>
          </div>
        </Label>
      </div>
      <small className="mt-4 opacity-70">
        <strong className="mr-1">NOTE:</strong>
        AI may make mistakes, they are not human after all.
      </small>
      <Button
        className="mt-8 justify-self-end"
        onClick={submit}
      >
        <Sparkles />
        Audit with AI
      </Button>
    </div>
  );

  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-7">Truth Auditor</h2>
      {loading ? <Skeleton></Skeleton> : formDiv}
    </div>
  );

  async function submit() {
    try {
      setLoading(true);
      const data: AIRequest = {
        text,
        useFactsCheck,
        useWritingAssistant,
        useSEOSuggestions,
        useSimilarContent,
      };

      // DEMO
      setResult(resultExample);
      return;

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed to generate AI object");
      const result = await res.json();
      resultSchema.parse(result);

      setResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
};

export default Counter;
