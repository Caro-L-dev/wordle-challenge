import { useState } from "react";

const useDeleteGuess = (initialGuesses: string[][]) => {
  const [guesses, setGuesses] = useState<string[][]>(initialGuesses);

  const handleDelete = () => {
    const lastGuessIndex = guesses.length - 1;
    const lastGuess = guesses[lastGuessIndex];
    if (lastGuess.length > 0) {
      const updatedGuesses = [...guesses];
      updatedGuesses[lastGuessIndex] = lastGuess.slice(0, -1);
      setGuesses(updatedGuesses);
    }
  };

  return { guesses, setGuesses, handleDelete };
};

export default useDeleteGuess;
