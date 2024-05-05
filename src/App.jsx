import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Content from "./components/content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Content />
    </div>
  );
}

export default App;
