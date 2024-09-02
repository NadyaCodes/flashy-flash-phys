import React, { useEffect, useState } from "react";
import type { Deck } from "terms/deckObject";

type ListGameDisplayProps = {
  chapterKeys: string[];
  deckObject: Deck;
};

const shuffleArray = (array: string[]): string[] => {
  const shuffled: string[] = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j] as string, shuffled[i] as string];
  }
  return shuffled;
};

const ListGameDisplay: React.FC<ListGameDisplayProps> = ({
  chapterKeys,
  deckObject,
}) => {
  const [termList, setTermList] = useState<string[]>([]);
  const [guessedTerm, setGuessedTerm] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const [showHint, setShowHint] = useState(false);
  const [result, setResult] = useState<React.JSX.Element[]>([]);

  const currentTerm = termList.length > 0 ? termList[0] : "No Term";

  // Ensure that `currentTerm` is a valid key for `deckObject.data`
  const answerArray =
    currentTerm && Array.isArray(deckObject.data[currentTerm])
      ? (deckObject.data[currentTerm] as string[])
      : [];

  useEffect(() => {
    setTermList(shuffleArray(chapterKeys));
  }, [chapterKeys]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuessedTerm(event.target.value);
  };

  const makeAnswerArray = (string: string): string[] => {
    return string
      .split("**")
      .map((substring) => substring.trim().toLowerCase())
      .map((substring) => (substring === "" ? "_" : substring));
  };

  const checkGuess = () => {
    if (answerArray && Array.isArray(answerArray[1])) {
      const correctAnswer: string[] = answerArray[1];
      const submittedAnswer = makeAnswerArray(guessedTerm);
      const localResult: [string, boolean][] = [];

      if (answerArray[2] === "ordered" && correctAnswer) {
        submittedAnswer.forEach((answer, index) => {
          if (correctAnswer[index]?.toLowerCase() === answer) {
            localResult.push([answer, true]);
          } else {
            localResult.push([answer, false]);
          }
        });
      } else if (answerArray[2] === "unordered" && correctAnswer) {
        const resultsArray: string[] = [];
        const correctAnswerLowercase = correctAnswer.map((element) =>
          element.toLowerCase(),
        );
        submittedAnswer.forEach((answer) => {
          if (
            correctAnswerLowercase.includes(answer.toLowerCase()) &&
            !resultsArray.includes(answer)
          ) {
            localResult.push([answer, true]);
            resultsArray.push(answer);
          } else {
            localResult.push([answer, false]);
            resultsArray.push(answer);
          }
        });
      }

      while (localResult.length < correctAnswer.length) {
        localResult.push(["_", false]);
      }

      const resultDisplay = localResult.map((element, index) => {
        if (element[0] === "_") {
          return (
            <div
              className="m-4 w-20 border-b-2 border-red-500"
              key={`blank-${index}`}
            >
              {" "}
            </div>
          );
        }
        const resultClass =
          "p-3 " + `${element[1] ? "text-green-500" : "text-red-500"}`;
        return (
          <div className={resultClass} key={`result-${index}`}>
            {element[0]}
          </div>
        );
      });

      setResult(resultDisplay);
    }
  };

  const moveToNextCard = () => {
    if (termList.length <= 1) {
      setDone(true);
      setGuessedTerm("");
    } else {
      setTermList(termList.slice(1));
      setGuessedTerm("");
    }
    setResult([]);
  };

  const moveForwardRepeat = () => {
    if (termList.length <= 1) {
      setDone(true);
      setGuessedTerm("");
      setResult([]);
      return;
    }

    const newTermList = [...termList];
    const currentTerm = newTermList.shift()!;

    if (currentTerm) {
      const newPosition = 3 >= newTermList.length ? newTermList.length : 3;

      newTermList.splice(newPosition, 0, currentTerm);
    }

    setTermList(newTermList);
    setGuessedTerm("");
    setResult([]);
  };

  const resetDeck = () => {
    setTermList(shuffleArray(chapterKeys));
    setGuessedTerm("");
    setResult([]);
    setDone(false);
    setShowHint(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center pb-10">
        <div className="m-2 flex items-center gap-10">
          <button
            onClick={resetDeck}
            className="rounded bg-teal-600 p-2 text-white"
          >
            ↖️ Reset Deck
          </button>
          <div className="text-xl font-bold">
            {currentTerm ?? "No term available"}
          </div>
          <button
            onClick={() => setShowHint(!showHint)}
            className="rounded bg-blue-500 p-2 text-white"
          >
            Hint 🤔
          </button>
        </div>
        {showHint && answerArray && Array.isArray(answerArray[0]) ? (
          <div>{answerArray[0].join(" ")}</div>
        ) : (
          showHint && <div>No hint available</div>
        )}

        {done && "All Done!!"}
        <div className="flex w-full justify-center">
          <input
            type="text"
            value={guessedTerm}
            onChange={handleInputChange}
            className="mr-2 mt-2 w-3/4 rounded border p-2 text-purple-950"
            placeholder="Type your guess here"
          />
          <button
            onClick={checkGuess}
            className="mt-2 rounded bg-teal-500 p-2 text-white"
          >
            Check
          </button>
        </div>
        {result && <div className="flex">{result}</div>}
        <div className="m-4 flex gap-4">
          <button
            onClick={moveForwardRepeat}
            className="mt-2 rounded bg-yellow-600 p-2 text-white"
          >
            Next Card (Revisit)
          </button>
          <button
            onClick={moveToNextCard}
            className="mt-2 rounded bg-violet-600 p-2 text-white"
          >
            Next Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListGameDisplay;
