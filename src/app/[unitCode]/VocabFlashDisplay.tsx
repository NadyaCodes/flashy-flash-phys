"use client";
import React, { useState } from "react";
import type { Deck } from "terms/deckObject";
import { findRandomArrayIndex } from "../../helpers/findRandomIndex";

export type FlashObject = {
  correct: boolean;
  data: [string, string];
};

type VocabFlashDisplayProps = {
  deckObject: Deck;
  termArray: string[];
};

const VocabFlashDisplay: React.FC<VocabFlashDisplayProps> = ({
  deckObject,
  termArray,
}) => {
  const [termList, setTermList] = useState<string[]>(termArray);
  const [currentCard, setCurrentCard] = useState<number>(
    findRandomArrayIndex(termList) ?? 0,
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

  const term = termList[currentCard] ?? "No Term";

  return (
    <div className="flex flex-col">
      {done && termList.length > 0 && currentCard !== undefined
        ? "All Done!!"
        : `Guessing: ${
            currentCard !== undefined &&
            currentCard >= 0 &&
            currentCard < termList.length
              ? deckObject.data[term] ?? "No Data"
              : "No Data"
          }`}
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

export default VocabFlashDisplay;
