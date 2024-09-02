import React, { useState } from "react";
import { Deck } from "terms/deckObject";
import { createTermListDisplay } from "~/helpers/createTermDefDisplay";
import { findRandomArrayIndex } from "~/helpers/findRandomIndex";
import ListGameDisplay from "./ListGameDisplay";

type ListGameComponentProps = {
  localDeckObject: Deck;
};

const ListGameComponent: React.FC<ListGameComponentProps> = ({
  localDeckObject,
}) => {
  const [chapterKeys, setChapterKeys] = useState(
    Object.keys(localDeckObject?.data),
  );
  const [defsVisible, setDefsVisible] = useState(false);
  // const [matchVisible, setMatchVisible] = useState(false);
  // const [vocabFlashVisible, setVocabFlashVisible] = useState(false);
  // const [defFlashVisible, setDefFlashVisible] = useState(false);

  const toggleVisibility = (item: string) => {
    switch (item) {
      // case "defFlash":
      //   setDefFlashVisible(!defFlashVisible);
      //   break;
      // case "vocabFlash":
      //   setVocabFlashVisible(!vocabFlashVisible);
      //   break;
      // case "match":
      //   setMatchVisible(!matchVisible);
      //   break;
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
  const [chapterDisplay, setChapterDisplay] = useState(setTerms(chapterKeys));

  // const [termList, setTermList] = useState<string[]>(chapterKeys);
  // const [currentCard, setCurrentCard] = useState<number>(
  //   findRandomArrayIndex(termList) ?? 0,
  // );

  // const shuffleItems = () => {
  //   const newItems = shuffleTerms(chapterKeys);
  //   setChapterKeys(newItems);
  //   setChapterDisplay(setTerms(newItems));
  // };

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
