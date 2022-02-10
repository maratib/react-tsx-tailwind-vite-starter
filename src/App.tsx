import { useState } from "react";
import logo from "./logo.svg";
import "./tailwind.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-red-500">Hello TailwindCSS with vite</h1>
    </div>
  );
}

export default App;
