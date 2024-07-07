"use client";
import { useState } from "react";
import type { Deck } from "terms/deckObject";
import { findRandomArrayIndex } from "./findRandomIndex";

export type FlashObject = {
  correct: boolean;
  data: [string, string];
};

export const createVocabFlashDisplay = (
  deckObject: Deck,
  termArray: string[],
) => {
  const [termList, setTermList] = useState<string[]>(termArray);
  const [currentCard, setCurrentCard] = useState<number>(
    findRandomArrayIndex(termList) || 0,
  );
  const [guessedTerm, setGuessedTerm] = useState<string>("");
  const [returnCard, setReturnCard] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuessedTerm(event.target.value);
  };

  const checkGuess = () => {
    if (termList[currentCard] === guessedTerm) {
      handleNextCard();
    } else {
      setReturnCard(true);
      alert("wrong");
    }
  };

  const handleNextCard = () => {
    let newTermList = [...termList];
    if (!returnCard) {
      newTermList = termList.filter((_, index) => index !== currentCard);
    }
    if (newTermList.length > 0) {
      let newIndex = findRandomArrayIndex(newTermList);
      while (newIndex === currentCard && newTermList.length > 1) {
        newIndex = findRandomArrayIndex(newTermList);
      }
      setGuessedTerm("");
      setCurrentCard(newIndex);
      setTermList(newTermList);
    } else {
      setDone(true);
      setGuessedTerm("");
    }
    setReturnCard(false);
  };

  return (
    <div className="flex flex-col">
      {done && termList && currentCard !== undefined
        ? "All Done!!"
        : `Guessing: ${deckObject.data[termList?.[currentCard] ?? ""]}`}
      <input
        type="text"
        value={guessedTerm}
        onChange={handleInputChange}
        className="mt-2 rounded border p-2 text-purple-950"
        placeholder="Type your guess here"
      />
      <button
        onClick={checkGuess}
        className="mt-2 rounded bg-blue-500 p-2 text-white"
      >
        Check
      </button>
    </div>
  );
};
