import { useEffect, useState } from "react";
import React from "react";
import { Deck } from "terms/deckObject";
import { findRandomArrayIndex } from "~/helpers/findRandomIndex";

type DefFlashProps = { localDeckObject: Deck; chapterKeys: string[] };

export default function DefFlash({
  localDeckObject,
  chapterKeys,
}: DefFlashProps) {
  const [termList, setTermList] = useState<string[]>(chapterKeys);
  const [currentCard, setCurrentCard] = useState<number>(
    findRandomArrayIndex(termList) || 0,
  );
  const [done, setDone] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCardCorrect = () => {
    let newTermList = [...termList];
    newTermList = termList.filter((_, index) => index !== currentCard);

    if (newTermList.length > 0) {
      let newIndex = findRandomArrayIndex(newTermList);
      while (newIndex === currentCard && newTermList.length > 1) {
        newIndex = findRandomArrayIndex(newTermList);
      }
      setCurrentCard(newIndex);
      setTermList(newTermList);
    } else {
      setDone(true);
    }
    setShowAnswer(false);
  };

  const handleNextCardWrong = () => {
    let newTermList = [...termList];
    let newIndex = findRandomArrayIndex(newTermList);
    while (newIndex === currentCard && newTermList.length > 1) {
      newIndex = findRandomArrayIndex(newTermList);
    }
    setCurrentCard(newIndex);
    setTermList(newTermList);
    setShowAnswer(false);
  };

  const CardSideOne = () => {
    return (
      <div className="flex flex-col">
        <div className="text-xl">
          {localDeckObject.data[termList?.[currentCard] ?? ""]}
        </div>
        <button
          className="translate-y-3 self-end text-sm"
          onClick={() => setShowAnswer(true)}
        >
          Flip &rarr;
        </button>
      </div>
    );
  };
  const CardSideTwo = () => {
    return (
      <div>
        <div className="text-xl">{termList?.[currentCard] ?? ""}</div>
        <div className="flex justify-between pt-4">
          <button
            className="rounded border-2 border-green-500 px-1"
            onClick={handleNextCardCorrect}
          >
            <span className="text-green-500">✓</span>
          </button>
          <button
            className="rounded border-2 border-red-500 px-1"
            onClick={handleNextCardWrong}
          >
            <span className="text-red-500">✗</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="my-4 flex flex-col items-center border-2 p-8">
        {done ? "Done!" : !showAnswer ? <CardSideOne /> : <CardSideTwo />}
      </div>
    </div>
  );
}
