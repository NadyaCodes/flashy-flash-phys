import { locationsTerms } from "./locations";
export type TermObject = {
  [key: string]: string;
};

export type Deck = {
  group: string;
  chapter: string;
  unitCode: string;
  unitName: string;
  data: Record<string, string>;
};

export type DeckObject = Record<string, Deck>;

export const emptyDeckObject = {
  group: "no-group",
  chapter: "no-chapter",
  unitCode: "no-chapter",
  unitName: "no-chapter",
  data: { none: "none" },
}

export const deckObject: DeckObject = {
  "0": {
    group: "basics",
    chapter: "Chapter 1",
    unitCode: "directions",
    unitName: "Body Directions",
    data: locationsTerms
  }
}