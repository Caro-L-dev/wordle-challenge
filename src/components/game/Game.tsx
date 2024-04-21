import React, { useState } from "react";

import Keyboard from "../keyboard/Keyboard";
import { Grid } from "../grid/Grid";
import Title from "../common/title/Title";

import useRandomWord from "../../hooks/useRandomWords";
import useDeleteGuess from "../../hooks/useDeleteGuess";

const Game: React.FC = () => {
  const NBR_LETTERS_WORD_REQUIRED = 5;
  const MAX_REMAINING_ATTEMPTS = 6;
  const { targetWord, generateNewWord } = useRandomWord();
  const { guesses, setGuesses, handleDelete } = useDeleteGuess([[]]);
  const [message, setMessage] = useState<string>("");
  const [letterColors, setLetterColors] = useState<string[][]>([]);

  const handleGuess = (letter: string) => {
    const lastGuessIndex = guesses.length - 1;
    const lastGuess = guesses[lastGuessIndex];
    if (lastGuess.length < NBR_LETTERS_WORD_REQUIRED) {
      const updatedGuesses = [...guesses];
      updatedGuesses[lastGuessIndex] = [...lastGuess, letter];
      setGuesses(updatedGuesses);
    }
  };

  const handleEnter = () => {
    const lastGuess = guesses[guesses.length - 1];
    if (lastGuess.length === NBR_LETTERS_WORD_REQUIRED) {
      const guessedWord = lastGuess.join("").toLowerCase().trim();
      const newLetterColors = guessedWord.split("").map((letter, index) => {
        if (letter === targetWord[index]) {
          return "CORRECT";
        } else if (targetWord.includes(letter)) {
          return "MISPLACED";
        } else {
          return "INCORRECT";
        }
      });

      setLetterColors((prevColors) => [...prevColors, newLetterColors]);

      const isWordGuessed = guessedWord === targetWord.toLowerCase().trim();
      if (isWordGuessed) {
        setMessage(`Bravo ! Vous avez deviné le mot mystère : ${targetWord} !`);
        if (MAX_REMAINING_ATTEMPTS > 0) {
          generateNewWord();
        }
      } else {
        setMessage("Mince, ce n'est pas le bon mot. Veuillez réessayer.");
      }

      setGuesses([...guesses, []]);
    } else {
      setMessage("Vous devez entrer un mot de 5 lettres minimum.");
    }
  };

  const handleReset = () => {
    setGuesses([[]]);
    generateNewWord();
  };

  return (
    <>
      <Title>Wordle</Title>
      <Grid guesses={guesses} letterColors={letterColors} />
      <p className="text-white text-center mb-4 ml-12">{message}</p>

      <Keyboard
        handleGuess={handleGuess}
        handleEnter={handleEnter}
        handleDelete={handleDelete}
        handleReset={handleReset}
      />
    </>
  );
};

export default Game;
