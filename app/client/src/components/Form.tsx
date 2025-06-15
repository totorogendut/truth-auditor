import { AIResult } from "backend/schemas";
import { Dispatch, FunctionComponent, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Counter: FunctionComponent<{
  setResult: Dispatch<AIResult>;
}> = ({ setResult }) => {
  const [loading, setLoading] = useState(false);
  const formDiv = (
    <div>
      <label>
        <strong>Facts check</strong>
        <span>
          Let AI browse its knowledge to do some facts check and do some facts
          verification.
        </span>
      </label>
      <label></label>
      <button onClick={submit}>Submit</button>
    </div>
  );

  return (
    <div>
      <h2>Truth Auditor</h2>
      {loading ? <Skeleton></Skeleton> : formDiv}
    </div>
  );

  async function submit() {
    try {
      setLoading(true);
      const result = {};

      setResult(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
};

export default Counter;
