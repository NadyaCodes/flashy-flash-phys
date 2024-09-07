import React, { useState } from "react";
import { createTermDefDisplay } from "~/helpers/createTermDefDisplay";
import { shuffleTerms } from "~/helpers/shuffleTerms";
import MatchMenu from "./MatchMenu";
import VocabFlash from "./VocabFlash";
import DefFlash from "./DefFlash";
import type { Deck } from "terms/deckObject";

type TriGameComponentProps = {
  localDeckObject: Deck;
};

const TriGameComponent: React.FC<TriGameComponentProps> = ({
  localDeckObject,
}) => {
  const [chapterKeys, setChapterKeys] = useState(
    Object.keys(localDeckObject?.data),
  );
  const [defsVisible, setDefsVisible] = useState(false);
  const [matchVisible, setMatchVisible] = useState(false);
  const [vocabFlashVisible, setVocabFlashVisible] = useState(false);
  const [defFlashVisible, setDefFlashVisible] = useState(false);

  const toggleVisibility = (item: string) => {
    switch (item) {
      case "defFlash":
        setDefFlashVisible(!defFlashVisible);
        break;
      case "vocabFlash":
        setVocabFlashVisible(!vocabFlashVisible);
        break;
      case "match":
        setMatchVisible(!matchVisible);
        break;
      case "defs":
        setDefsVisible(!defsVisible);
        break;
      default:
        setDefsVisible(!defsVisible);
        break;
    }
  };

  const setTerms = (chapterKeys: string[]) =>
    createTermDefDisplay(localDeckObject.data, chapterKeys);
  const [chapterDisplay, setChapterDisplay] = useState(setTerms(chapterKeys));

  const shuffleItems = () => {
    const newItems = shuffleTerms(chapterKeys);
    setChapterKeys(newItems);
    setChapterDisplay(setTerms(newItems));
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 pb-20">
        <div>
          <button
            onClick={() => toggleVisibility("match")}
            className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            {matchVisible ? "Hide" : "Show"} Match Game
          </button>
          {matchVisible && (
            <div className="py-4">
              <button
                className="my-4 flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                onClick={shuffleItems}
              >
                <h3 className="text-2xl font-bold">Shuffle</h3>
              </button>
              <MatchMenu
                localDeckObject={localDeckObject}
                chapterKeys={chapterKeys}
              />
            </div>
          )}
        </div>
        <div className="md:w-5/6">
          <button
            onClick={() => toggleVisibility("vocabFlash")}
            className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            {vocabFlashVisible ? "Hide" : "Show"} Vocab Flash Game
          </button>
          {vocabFlashVisible && (
            <div className="absolute left-0 w-screen p-10 md:left-1/2 md:w-1/2 md:-translate-x-1/2 md:transform">
              <VocabFlash
                localDeckObject={localDeckObject}
                chapterKeys={chapterKeys}
              />
            </div>
          )}
        </div>
        <div className="md:w-5/6">
          <button
            onClick={() => toggleVisibility("defFlash")}
            className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            {defFlashVisible ? "Hide" : "Show"} Defs Flash Game
          </button>
          {defFlashVisible && (
            <div className="">
              <DefFlash
                localDeckObject={localDeckObject}
                chapterKeys={chapterKeys}
              />
            </div>
          )}
        </div>
      </div>
      <div className="mt-28">
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

export default TriGameComponent;
