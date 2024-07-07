"use client";
import React, { useState } from "react";
import { createTermMatchDisplay } from "~/helpers/createTermMatchDisplay";
import { locationsTerms } from "terms/locations";

type MatchMenuProps = { locationsKeys: string[] };

export default function MatchMenu({ locationsKeys }: MatchMenuProps) {
  const [numCorrect, setNumCorrect] = useState([0, locationsKeys.length]);
  const locationDisplay = createTermMatchDisplay(
    locationsTerms,
    locationsKeys,
    setNumCorrect,
  );
  return (
    <div>
      <div>
        {numCorrect[0]}/{numCorrect[1]}
      </div>
      {locationDisplay}
    </div>
  );
}
