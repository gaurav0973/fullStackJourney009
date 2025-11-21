import { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = inputValue.trim();
      if (trimmed && !chips.includes(trimmed)) {
        setChips([...chips, trimmed]);
        setInputValue("");
      }
    }
  };

  const removeChip = (chipToRemove) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  };

  return (
    <div className="p-4 w-full max-w-md">
      <h2 className="text-xl font-bold mb-2">Chips Input</h2>

      <div className="flex flex-wrap gap-2 border p-2 rounded bg-white shadow-sm">

        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
          >
            {chip}
            <button
              className="ml-2 cursor-pointer font-bold hover:text-red-200"
              onClick={() => removeChip(chip)}
            >
              ×
            </button>
          </div>
        ))}

        <input
          type="text"
          placeholder="Type a chip and press Enter"
          className="flex-grow min-w-[120px] outline-none p-1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default ChipsInput;
