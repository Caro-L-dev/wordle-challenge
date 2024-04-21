import { useState } from "react";
import { WORDS } from "../lib/data/words";

const useRandomWord = () => {
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
  };

  const [targetWord, setTargetWord] = useState<string>(() => getRandomWord());

  const generateNewWord = () => {
    setTargetWord(getRandomWord());
  };

  return { targetWord, generateNewWord };
};

export default useRandomWord;
