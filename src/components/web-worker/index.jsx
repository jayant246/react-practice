import { useMemo, useState } from "react";
import worker_script from "./workerBlob";

// need to put the worker file in the public folder for its working
// We can run the worker file by creating a bob and export it as a script
const WebWorker = () => {
  const [sum, setSum] = useState(0);
  const worker = useMemo(() => new Worker("worker.js"), []);
  const worker2 = useMemo(() => new Worker(worker_script), []);
  // ! worker 3 will throw an error
  const worker3 = useMemo(() => new Worker("./worker3.js"), []);

  const handleClick = () => {
    console.log("here", worker);
    worker.postMessage("calculate sum");
    worker.onmessage = (msg) => {
      console.log("msg", msg);
      setSum(msg.data);
    };
  };

  const callWorker2 = () => {
    worker2.postMessage("hey there");
  };

  worker3.postMessage("hey from 2");

  return (
    <div>
      <button onClick={handleClick}>Cal Sum</button>
      <button onClick={callWorker2}>Call Work2</button>
      <h2>{sum}</h2>
    </div>
  );
};

export default WebWorker;
