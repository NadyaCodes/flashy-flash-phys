"use client";
import React, { useState } from "react";
import { Deck } from "terms/deckObject";
import { createTermMatchDisplay } from "~/helpers/createTermMatchDisplay";

type MatchMenuProps = { localDeckObject: Deck; chapterKeys: string[] };

export default function MatchMenu({
  localDeckObject,
  chapterKeys,
}: MatchMenuProps) {
  const [numCorrect, setNumCorrect] = useState([0, chapterKeys.length]);
  const deckDisplay = createTermMatchDisplay(
    localDeckObject.data,
    chapterKeys,
    setNumCorrect,
  );
  return (
    <div>
      <div>
        {numCorrect[0]}/{numCorrect[1]}
      </div>
      {deckDisplay}
    </div>
  );
}
