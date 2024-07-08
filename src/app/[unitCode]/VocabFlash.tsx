"use client";
import React from "react";
import type { Deck } from "terms/deckObject";
import VocabFlashDisplay from "./VocabFlashDisplay";

type VocabFlashProps = { localDeckObject: Deck; chapterKeys: string[] };

export default function VocabFlash({
  localDeckObject,
  chapterKeys,
}: VocabFlashProps) {
  return (
    <div>
      <VocabFlashDisplay deckObject={localDeckObject} termArray={chapterKeys} />
    </div>
  );
}
