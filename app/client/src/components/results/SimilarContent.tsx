import { FunctionComponent } from "react";
import type { AIResult } from "backend/schemas";

const Component: FunctionComponent<{
  result: Exclude<AIResult["similarContent"], undefined>;
}> = ({ result: { score, similarContents } }) => {
  return (
    <div className="border-black/40 ">
      <div className="flex w-full justify-between items-center">
        <strong className="text-xl flex gap-2 items-center">
          Similar Content
        </strong>
        {/* <div>
          <strong>Score:</strong> {score}
        </div> */}
      </div>
      <div className="flex flex-col justify-between w-full gap-y-2 mt-2">
        {similarContents.map((data) => (
          <a className=" flex flex-col leading-[1.1] ">
            <strong>{data.title}</strong>
            <span className="underline overflow-ellipsis w-full">
              {data.url}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Component;
