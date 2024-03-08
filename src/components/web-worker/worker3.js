console.log("worker 3 loaded");
onmessage = (msg) => {
  console.log("msg received in the worker file", msg);

  setTimeout(() => {
    postMessage(2000);
  }, 3000);
};
