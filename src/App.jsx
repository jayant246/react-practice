import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>INC</button>
    </div>
  );
}

export default App;
