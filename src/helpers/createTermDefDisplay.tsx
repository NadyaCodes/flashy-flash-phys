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
