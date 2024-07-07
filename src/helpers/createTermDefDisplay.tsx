import { TermObject } from "terms/deckObject";

export const createTermDefDisplay = (
  termObject: TermObject,
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
