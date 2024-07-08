"use client";
import React from "react";
import type { Deck } from "terms/deckObject";
import { createVocabFlashDisplay } from "~/helpers/createVocabFlashDisplay";

type VocabFlashProps = { localDeckObject: Deck; chapterKeys: string[] };

export default function VocabFlash({
  localDeckObject,
  chapterKeys,
}: VocabFlashProps) {
  const vocabFlashDisplay = createVocabFlashDisplay(
    localDeckObject,
    chapterKeys,
  );
  return <div>{vocabFlashDisplay}</div>;
}
