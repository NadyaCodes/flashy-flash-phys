"use client";
import React, { useState, useEffect } from "react";
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
  const [showHint, setShowHint] = useState<boolean>(false);
  const [listLength, setListLength] = useState<number>(termList.length);

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
      setShowHint(false);
    } else {
      setDone(true);
      setGuessedTerm("");
    }
    setReturnCard(false);
  };

  const term = termList[currentCard] ?? "No Term";
  const currentData = deckObject.data[term];
  const displayData = Array.isArray(currentData)
    ? "Invalid Data Format"
    : currentData ?? "No Data";

  useEffect(() => {
    setListLength(termList.length);
  }, [termList]);

  return (
    <div className="flex flex-col">
      <div className="pb-2 text-green-400">
        {listLength} / {termArray.length}
      </div>
      {done && termList.length > 0 && currentCard !== undefined
        ? "All Done!!"
        : `Guessing: ${displayData}`}
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
      <button
        onClick={() => setShowHint(!showHint)}
        className="mt-2 rounded bg-green-400 p-2 text-green-900"
      >
        Hint
      </button>
      {showHint ? <div>{term}</div> : <div></div>}
    </div>
  );
};

export default VocabFlashDisplay;
