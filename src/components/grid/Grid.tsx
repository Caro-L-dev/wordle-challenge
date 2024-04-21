import React from "react";
import { RowNumbers } from "./RowNumbers";

interface GridProps {
  guesses: string[][];
  letterColors: string[][];
}

export const Grid: React.FC<GridProps> = ({ guesses, letterColors }) => {
  const GenerateGrid = () => {
    const grid = [];

    for (let col = 0; col < 5; col++) {
      const colData = [];
      for (let row = 0; row < 6; row++) {
        const guess = guesses[row];
        const letter = guess ? guess[col] : "";
        const color = letterColors[row] ? letterColors[row][col] : "gray";
        colData.push(
          <div
            key={`${row}-${col}`}
            className={`size-10 border border-dashed border-x-2 border-y-0 border-x-slate-200 flex justify-center items-center w-full my-1 ${
              color === "CORRECT"
                ? "bg-green-500"
                : color === "MISPLACED"
                ? "bg-orange-500"
                : "bg-slate-400"
            }`}
          >
            {letter}
          </div>
        );
      }
      grid.push(
        <div key={col} className="flex flex-col">
          {colData}
        </div>
      );
    }

    return grid;
  };

  return (
    <div className="grid grid-cols-6 mb-4 mx-auto max-w-xs font-bold text-slate-800">
      <div className="flex flex-col">
        <RowNumbers />
      </div>
      {GenerateGrid()}
    </div>
  );
};
