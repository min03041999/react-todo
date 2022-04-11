import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Todo from "./Todo/Todo";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(false);

  const handleColor = () => {
    console.log(backgroundColor);
    setBackgroundColor(!backgroundColor);
  };
  return (
    <div>
      <button className="btn-show" onClick={handleColor}>
        {backgroundColor ? "Hide" : "Show"}
      </button>
      <div className={backgroundColor ? "body-color" : ""}>
        <Todo />
      </div>
    </div>
  );
}

export default App;
