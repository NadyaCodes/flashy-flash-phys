"use client";
import React, { useState, useEffect } from "react";
import type { TermObject } from "terms/deckObject";

type TermMatchDisplayProps = {
  termObject: TermObject;
  termArray: string[];
  setNumCorrect: React.Dispatch<React.SetStateAction<number[]>>;
};

const TermMatchDisplay: React.FC<TermMatchDisplayProps> = ({
  termObject,
  termArray,
  setNumCorrect,
}) => {
  const allDrops = Object.values(termObject);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    key: string,
  ) => {
    const selectedValue = event.target.value;
    setSelectedAnswers({
      ...selectedAnswers,
      [key]: selectedValue,
    });
  };

  useEffect(() => {
    const correctCount = termArray.reduce<number>((count, key) => {
      const selectedValue = selectedAnswers[key];
      const answer = termObject[key];
      if (selectedValue === answer) {
        return count + 1;
      }
      return count;
    }, 0);
    setNumCorrect((prevNumCorrect) => {
      const newCorrectCount =
        typeof correctCount === "number"
          ? correctCount
          : prevNumCorrect[0] ?? 0;
      const newIncorrectCount = prevNumCorrect[1] ?? 0;
      return [newCorrectCount, newIncorrectCount];
    });
  }, [selectedAnswers, termObject, termArray, setNumCorrect]);

  return (
    <div>
      {termArray.map((key) => {
        const answer = termObject[key];
        const selectedValue = selectedAnswers[key];

        let indicator = null;
        if (answer && selectedValue === answer) {
          indicator = <span className="text-green-500">✓</span>;
        } else if (selectedValue && selectedValue !== answer) {
          indicator = <span className="text-red-500">✗</span>;
        }

        return (
          <div key={key} className="flex items-center">
            <span className="w-1/2 font-bold">{key}</span>
            <select
              className="m-2 w-1/2 text-indigo-900"
              value={selectedValue}
              onChange={(e) => handleSelectChange(e, key)}
            >
              <option value="">Select an answer</option>
              {allDrops.map((drop, index) => (
                <option key={index} value={drop}>
                  {drop}
                </option>
              ))}
            </select>
            <div className="ml-2">{indicator}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TermMatchDisplay;
