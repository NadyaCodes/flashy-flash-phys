"use client";
import { useState } from "react";
import Link from "next/link";
import { createTermDefDisplay } from "~/helpers/createTermDefDisplay";
import { shuffleTerms } from "~/helpers/shuffleTerms";
import MatchMenu from "./MatchMenu";
import VocabFlash from "./VocabFlash";
import { deckObject, emptyDeckObject } from "terms/deckObject";
import { usePathname } from "next/navigation";

export default function ChapterComponent() {
  const deck = usePathname().slice(1);

  const deckObjectKeys = Object.keys(deckObject);

  const localDeckObjectItem =
    deckObjectKeys.find((element) => deckObject[element]?.unitCode === deck) ||
    "no-deck";

  const localDeckObject = deckObject[localDeckObjectItem] || emptyDeckObject;

  const [chapterKeys, setChapterKeys] = useState(
    Object.keys(localDeckObject?.data),
  );
  const [defsVisible, setDefsVisible] = useState(false);
  const [matchVisible, setMatchVisible] = useState(false);

  const toggleVisibility = () => {
    setDefsVisible(!defsVisible);
  };

  const toggleMatch = () => {
    setMatchVisible(!matchVisible);
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
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col gap-12 px-4 py-16 ">
        <Link
          className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="/"
        >
          <h3 className="text-2xl font-bold">Back</h3>
        </Link>
        <div className="flex justify-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {localDeckObject.group.toLocaleUpperCase()}{" "}
            {localDeckObject.chapter}:{" "}
            <span className="capitalize text-[hsl(280,100%,70%)]">
              {localDeckObject.unitCode}
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        </div>
        <button
          className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          onClick={shuffleItems}
        >
          <h3 className="text-2xl font-bold">Shuffle</h3>
        </button>

        <div className="flex">
          <div>
            <button
              onClick={toggleMatch}
              className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            >
              {matchVisible ? "Hide" : "Show"} Match Game
            </button>
            {matchVisible && (
              <div className="">
                <MatchMenu
                  localDeckObject={localDeckObject}
                  chapterKeys={chapterKeys}
                />
              </div>
            )}
          </div>
          <VocabFlash
            localDeckObject={localDeckObject}
            chapterKeys={chapterKeys}
          />
        </div>

        <div>
          <button
            onClick={toggleVisibility}
            className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          >
            {defsVisible ? "Hide" : "Show"} Definitions
          </button>
          {defsVisible && <div className="">{chapterDisplay}</div>}
        </div>
      </div>
    </main>
  );
}
