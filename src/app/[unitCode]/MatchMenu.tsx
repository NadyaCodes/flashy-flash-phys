"use client";
import React, { useState } from "react";
import type { Deck } from "terms/deckObject";
import TermMatchDisplay from "./TermMatchDisplay";

type MatchMenuProps = { localDeckObject: Deck; chapterKeys: string[] };

export default function MatchMenu({
  localDeckObject,
  chapterKeys,
}: MatchMenuProps) {
  const [numCorrect, setNumCorrect] = useState([0, chapterKeys.length]);

  return (
    <div>
      <div>
        {numCorrect[0]}/{numCorrect[1]}
      </div>
      <TermMatchDisplay
        termObject={localDeckObject.data}
        termArray={chapterKeys}
        setNumCorrect={setNumCorrect}
      />
    </div>
  );
}
