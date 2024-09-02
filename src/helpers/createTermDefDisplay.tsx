import type { TermObject } from "terms/deckObject";
import { ListObject } from "terms/mnemonics";

export const createTermDefDisplay = (
  termObject: TermObject | ListObject,
  termArray: string[],
) => {
  return (
    <div>
      {termArray.map((key) => (
        <div key={key} className="">
          <span className="font-bold">{key}</span>: {termObject[key]}
        </div>
      ))}
    </div>
  );
};

export const createTermListDisplay = (
  termObject: TermObject | ListObject,
  termArray: string[],
) => {
  return (
    <div>
      {termArray.map((key) => {
        const termValue = termObject[key];

        if (termValue && Array.isArray(termValue) && termValue.length >= 2) {
          const hintText = "(" + termValue[0].join(" ") + ")";
          const answerText = termValue[1].join(" ");
          return (
            <div key={key} className="">
              <span className="font-bold">{key}</span>:{" "}
              <span className="p-4">{answerText}</span>
              <span className="italic">{hintText} </span>
            </div>
          );
        }

        return (
          <div key={key} className="text-red-500">
            <span className="font-bold">{key}</span>: Invalid term data
          </div>
        );
      })}
    </div>
  );
};
