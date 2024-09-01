import { anatomicalTerms } from "./anatomicalTerms";
import { mnemonics } from "./mnemonics";

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
  "1.1" : {
    group: "intro",
    chapter: "Week 1",
    unitCode: "anatomical-terms",
    unitName: "Anatomical Terms",
    data: anatomicalTerms
  },
  "mnem" : {
    group: "extras",
    chapter: "Mnemonics & Acronyms",
    unitCode: "mnmnonics-acronyms",
    unitName: "Mna Mna",
    data: mnemonics
  }

}