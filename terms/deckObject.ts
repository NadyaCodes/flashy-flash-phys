import { locationsTerms } from "./locations";
export type TermObject = {
  [key: string]: string;
};

export type Deck = {
  group: string;
  chapter: string;
  unitCode: string;
  data: Record<string, string>;
};

export type DeckObject = Record<string, Deck>;

export const emptyDeckObject = {
  group: "no-group",
  chapter: "no-chapter",
  unitCode: "no-chapter",
  data: { none: "none" },
}

export const deckObject: DeckObject = {
  "0": {
    group: "basics",
    chapter: "Chapter 1",
    unitCode: "locations",
    data: locationsTerms
  },
  "1": {
    group: "basics",
    chapter: "Chapter 2",
    unitCode: "dummy",
    data: {"dummy1": "Dummy 1", "dummy2": "Dummy 2"}
  },
  "2": {
    group: "beyond",
    chapter: "Chapter 1",
    unitCode: "dummy2",
    data: {"dummy3": "Dummy 3", "dummy4": "Dummy 4"}
  }
}