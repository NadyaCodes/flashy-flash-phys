import React, { useState } from "react";
import type { Deck } from "terms/deckObject";
import { createTermListDisplay } from "~/helpers/createTermDefDisplay";
import ListGameDisplay from "./ListGameDisplay";

type ListGameComponentProps = {
  localDeckObject: Deck;
};

const ListGameComponent: React.FC<ListGameComponentProps> = ({
  localDeckObject,
}) => {
  const chapterKeys = Object.keys(localDeckObject?.data);
  const [defsVisible, setDefsVisible] = useState(false);

  const toggleVisibility = (item: string) => {
    switch (item) {
      case "defs":
        setDefsVisible(!defsVisible);
        break;
      default:
        setDefsVisible(!defsVisible);
        break;
    }
  };

  const setTerms = (chapterKeys: string[]) =>
    createTermListDisplay(localDeckObject.data, chapterKeys);
  const chapterDisplay = setTerms(chapterKeys);

  return (
    <div>
      <div className="-mt-2 flex flex-col items-center pb-4">
        <span className="italic">Separate terms with: **</span>
        <span className="italic">Add blanks with: **_**</span>
      </div>
      <ListGameDisplay chapterKeys={chapterKeys} deckObject={localDeckObject} />
      <div>
        <button
          onClick={() => toggleVisibility("defs")}
          className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        >
          {defsVisible ? "Hide" : "Show"} Definitions
        </button>
        {defsVisible && <div className="">{chapterDisplay}</div>}
      </div>
    </div>
  );
};

export default ListGameComponent;
