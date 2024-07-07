export type termObject = {
  [key: string]: string;
};

export const createTermDefDisplay = (
  termObject: termObject,
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
