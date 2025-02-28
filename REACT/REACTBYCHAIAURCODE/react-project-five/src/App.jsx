import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // State variables for password settings
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Reference for password input field
  const passwordRef = useRef(null);

  // Password generator function with dependencies
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`?";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // Function to copy password to clipboard
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length); // Fixing selection range
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Effect to regenerate password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-700 p-5">
      <div className="w-full max-w-md shadow-lg rounded-lg p-6 text-orange-500 bg-gray-900 border border-gray-700">
        <h1 className="text-white text-center text-2xl font-semibold mb-4">
          🔒 Password Generator
        </h1>

        {/* Password Display with Copy Button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 text-lg font-mono bg-gray-700 text-white border border-gray-600 rounded-l-md"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-blue-700 hover:bg-green-400 text-white px-4 py-2 rounded-r-md transition duration-300 cursor-pointer"
            onClick={copyPassword}
          >
            📋 Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">
          {/* Password Length Slider */}
          <div className="flex items-center justify-between text-white">
            <label className="font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer accent-orange-500"
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </div>

          {/* Number Toggle */}
          <div className="flex items-center gap-x-2 text-white">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              className="w-5 h-5 cursor-pointer accent-orange-500"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="cursor-pointer">
              Include Numbers
            </label>
          </div>

          {/* Special Characters Toggle */}
          <div className="flex items-center gap-x-2 text-white">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              className="w-5 h-5 cursor-pointer accent-orange-500"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput" className="cursor-pointer">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
