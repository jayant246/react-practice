import { useState } from "react";
import "./App.css";
import WebWorker from "./components/web-worker";
// import CustomEvent from "./components/custom-event";

function App() {
  const [toggle, setTogggle] = useState(true);
  return (
    <>
      <h1>First file</h1>
      <button onClick={() => setTogggle(!toggle)}>Toggle</button>
      {toggle && <WebWorker />}
      {/* <CustomEvent /> */}
    </>
  );
}

export default App;
