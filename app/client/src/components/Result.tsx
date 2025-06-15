import { FunctionComponent } from "react";
import type { AIResult } from "backend/schemas";

const Counter: FunctionComponent<{
  result: AIResult;
}> = ({ result }) => {
  const { factsCheck, writingAssistant } = result;
  return (
    <div>
      <h2>Truth Auditor</h2>
      {factsCheck && (
        <div>
          <h3>{factsCheck.title}</h3>
          <strong>AI Facts check score: {factsCheck.score}</strong>
          <div>
            AI tells you that what you are currently writing is, in fact,{" "}
            {JSON.stringify(factsCheck.verdict)}.
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
