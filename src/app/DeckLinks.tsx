import React from "react";
import Link from "next/link";
import { deckObject, emptyDeckObject } from "terms/deckObject";
import type { Deck, DeckObject } from "terms/deckObject";

export default function DeckLinks() {
  const groupedDecks: Record<string, Deck[]> = groupDecksByGroup(deckObject);

  const decksDisplay = Object.keys(groupedDecks).map((group) => (
    <div key={group} className="capitalize">
      <h2 className="p-2 text-3xl font-bold">{group}</h2>
      <div className="flex flex-wrap gap-4 pb-8">
        {groupedDecks[group]?.map((deck, index) => (
          <Link
            key={index}
            className="flex min-w-40 max-w-56 flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={deck.unitCode}
          >
            <h3 className="text-2xl font-bold">{deck.unitName}</h3>
            <div className="text-lg">{deck.chapter}</div>
          </Link>
        ))}
      </div>
    </div>
  ));

  return <div>{decksDisplay}</div>;
}

function groupDecksByGroup(deckObject: DeckObject): Record<string, Deck[]> {
  return Object.keys(deckObject).reduce((acc: Record<string, Deck[]>, key) => {
    const deck = deckObject[key] ?? emptyDeckObject;
    if (!acc[deck.group]) {
      acc[deck.group] = [];
    }
    acc[deck.group]?.push(deck);

    return acc;
  }, {});
}
