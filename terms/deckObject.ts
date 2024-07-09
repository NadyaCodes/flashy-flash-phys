import { directionalTerms, introTerms } from "./basics";
import { tissueTerms, tissueTerms2 } from "./tissues";
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
  }
}