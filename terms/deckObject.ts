import { directionalTerms, introTerms } from "./basics";
import { tissueTerms, tissueTerms2, tissueTerms3, tissueTerms4 } from "./tissues";
import { basicAnatomicalTerms, cellParts, microscopeTerms, tissueTermsX } from "./anatomyX";
import { nervousTerms, nervousTerms2 } from "./nervous";
export type TermObject = {
  [key: string]: string;
};


//other playlists to check out:
//https://www.youtube.com/watch?v=PWGBqskV1UQ&list=PL8dPuuaLjXtPW_ofbxdHNciuLoTRLPMgB

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
    unitCode: "intro",
    unitName: "Basic Terms",
    data: introTerms
  },
  "1": {
    group: "basics",
    chapter: "Chapter 1",
    unitCode: "directions",
    unitName: "Directional Terms",
    data: directionalTerms
  },
  "2": {
    group: "tissues",
    chapter: "Chapter 2",
    unitCode: "tissues",
    unitName: "Tissue Terms 1",
    data: tissueTerms
  },
  "3": {
    group: "tissues",
    chapter: "Chapter 2",
    unitCode: "tissues2",
    unitName: "Tissue Terms 2",
    data: tissueTerms2
  },
  "4": {
    group: "tissues",
    chapter: "Chapter 2",
    unitCode: "tissues3",
    unitName: "Tissue Terms 3",
    data: tissueTerms3
  },
  "5": {
    group: "anatomyX",
    chapter: "Chapter 1",
    unitCode: "basic",
    unitName: "Basic Anatomical Terms",
    data: basicAnatomicalTerms
  },
  "6": {
    group: "anatomyX",
    chapter: "Chapter 2",
    unitCode: "cells",
    unitName: "Cell Parts",
    data: cellParts
  },
  "7": {
    group: "anatomyX",
    chapter: "Chapter 2",
    unitCode: "microscopes",
    unitName: "Microscope Terms",
    data: microscopeTerms
  },
  "8": {
    group: "anatomyX",
    chapter: "Chapter 2",
    unitCode: "tissuesX",
    unitName: "Tissue Terms",
    data: tissueTermsX
  },
  "9": {
    group: "tissues",
    chapter: "Chapter 2",
    unitCode: "tissues4",
    unitName: "Tissue Terms 4",
    data: tissueTerms4
  },
  "10": {
    group: "nervous",
    chapter: "Chapter 4",
    unitCode: "nervous",
    unitName: "Nervous Terms 1",
    data: nervousTerms
  },
  "11": {
    group: "nervous",
    chapter: "Chapter 4",
    unitCode: "nervous2",
    unitName: "Nervous Terms 2",
    data: nervousTerms2
  }
}