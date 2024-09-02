"use client";
import Link from "next/link";
import { deckObject, emptyDeckObject } from "terms/deckObject";
import { usePathname } from "next/navigation";
import TriGameComponent from "./TriGameComponent";
import ListGameComponent from "./ListGameComponent";

export default function ChapterComponent() {
  const deck = usePathname().slice(1);

  const deckObjectKeys = Object.keys(deckObject);

  const localDeckObjectItem =
    deckObjectKeys.find((element) => deckObject[element]?.unitCode === deck) ??
    "no-deck";

  const localDeckObject = deckObject[localDeckObjectItem] ?? emptyDeckObject;

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
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            {localDeckObject.group.toLocaleUpperCase()}{" "}
            {localDeckObject.chapter}:{" "}
            <span className="capitalize text-[hsl(280,100%,70%)]">
              {localDeckObject.unitName}
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
        </div>

        {localDeckObject.deckType === "tri" && (
          <TriGameComponent localDeckObject={localDeckObject} />
        )}
        {localDeckObject.deckType === "list" && (
          <ListGameComponent localDeckObject={localDeckObject} />
        )}
      </div>
    </main>
  );
}
