import Form from "./Form";
import Result from "./Result";
import { FunctionComponent, useState } from "react";
import { useFieldPlugin } from "@storyblok/field-plugin/react";
import type { AIResult } from "backend/schemas";

const FieldPlugin: FunctionComponent = () => {
  const { type, data, actions } = useFieldPlugin({
    enablePortalModal: true,
    validateContent: (content: unknown) => ({
      content: typeof content === "number" ? content : 0,
    }),
  });

  const [result, setResult] = useState<AIResult | null>(null);

  if (type !== "loaded") {
    return null;
  }

  const div = !!result ? (
    <Result result={result} />
  ) : (
    <Form setResult={setResult} />
  );

  return <div className="container bg-white w-full p-4">{div}</div>;
};

export default FieldPlugin;
