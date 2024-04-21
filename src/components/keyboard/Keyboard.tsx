import React from "react";
import Button from "../common/button/Button";

interface KeyboardProps {
  handleGuess: (letter: string) => void;
  handleEnter: () => void;
  handleDelete: () => void;
  handleReset: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({
  handleGuess,
  handleEnter,
  handleDelete,
  handleReset,
}) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="max-w-3xl mx-auto">
      {alphabet.split("").map((letter, index) => (
        <Button
          key={index}
          className="w-14 p-4"
          onClick={() => handleGuess(letter)}
        >
          {letter}
        </Button>
      ))}

      <Button variant="delete" onClick={handleDelete}>
        ↻
      </Button>

      <Button variant="enter" onClick={handleEnter}>
        ↲
      </Button>

      <Button onClick={handleReset}>Recommencer</Button>
    </div>
  );
};

export default Keyboard;
