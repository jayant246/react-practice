console.log("worker 2 loaded");
const workercode = () => {
  onmessage = (msg) => {
    console.log("msg received in the worker file", msg);

    setTimeout(() => {
      postMessage(2000);
    }, 3000);
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const worker_script = URL.createObjectURL(blob);
console.log('script url', worker_script);
export default worker_script;
