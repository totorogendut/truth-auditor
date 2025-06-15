import Counter from "../Form";
import { FunctionComponent } from "react";
import { useFieldPlugin } from "@storyblok/field-plugin/react";

const FieldPlugin: FunctionComponent = () => {
  const { type, data, actions } = useFieldPlugin({
    enablePortalModal: true,
    validateContent: (content: unknown) => ({
      content: typeof content === "number" ? content : 0,
    }),
  });

  if (type !== "loaded") {
    return null;
  }

  return (
    <div className="container">
      <Counter
        count={data.content}
        generateAI={() => actions.setContent(data.content + 1)}
      />
    </div>
  );
};

export default FieldPlugin;
