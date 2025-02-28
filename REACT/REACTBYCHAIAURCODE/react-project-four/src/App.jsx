import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("white");

  function changeColor(color) {
    setBgColor(color);
  }

  return (
    <div
      className=" w-screen h-screen  flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-3xl font-bold mb-5">AAYIE COLOR CHANGER BANATE HAI</h1>
      <div className="p-5 rounded-3xl bg-gray-400  flex  gap-3">
        <button className="bg-red-500 px-4 py-2 text-white rounded" onClick={() => changeColor("red")}>
          RED
        </button>
        <button className="bg-blue-500 px-4 py-2 text-white rounded" onClick={() => changeColor("blue")}>
          BLUE
        </button>
        <button className="bg-green-500 px-4 py-2 text-white rounded" onClick={() => changeColor("green")}>
          GREEN
        </button>
        <button className="bg-indigo-500 px-4 py-2 text-white rounded" onClick={() => changeColor("indigo")}>
          INDIGO
        </button>
        <button className="bg-yellow-500 px-4 py-2 text-white rounded" onClick={() => changeColor("yellow")}>
          YELLOW
        </button>
      </div>
    </div>
  );
}

export default App;
