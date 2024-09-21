import { activeTransport, cellTerms, cellularRespiration, membraneTerms, passiveMembraneTransport, passiveMembraneTransport2 } from "./cellTerms";
import { ListObject, mnemonics } from "./mnemonics";

export type TermObject = {
  [key: string]: string;
};


export type Deck = {
  group: string;
  chapter: string;
  unitCode: string;
  unitName: string;
  deckType: string;
  data: TermObject | ListObject
};

export type DeckObject = Record<string, Deck>;

export const emptyDeckObject = {
  group: "no-group",
  chapter: "no-chapter",
  unitCode: "no-chapter",
  unitName: "no-chapter",
  deckType: "tri",
  data: { none: "none" },
}

export const deckObject: DeckObject = {
  "1.1" : {
    group: "Module 1",
    chapter: "Cells",
    unitCode: "cell-physiology",
    unitName: "Cell Physiology",
    deckType: "tri",
    data: cellTerms
  },
  "1.2" : {
    group: "Module 1",
    chapter: "Cells",
    unitCode: "cellular-respiration",
    unitName: "Cellular Respiration",
    deckType: "tri",
    data: cellularRespiration
  },
  "1.3" : {
    group: "Module 1",
    chapter: "Membranes",
    unitCode: "membrane",
    unitName: "Cellular Membrane",
    deckType: "tri",
    data: membraneTerms
  },
  "1.4" : {
    group: "Module 1",
    chapter: "Membranes",
    unitCode: "unassisted-transport",
    unitName: "Membrane Transport",
    deckType: "tri",
    data: passiveMembraneTransport
  },
  "1.5" : {
    group: "Module 1",
    chapter: "Membranes",
    unitCode: "unassisted-transport-2",
    unitName: "Membrane Transport 2",
    deckType: "tri",
    data: passiveMembraneTransport2
  },
  "1.6" : {
    group: "Module 1",
    chapter: "Membranes",
    unitCode: "active-transport",
    unitName: "Active Transport",
    deckType: "tri",
    data: activeTransport
  },
  "mnem" : {
    group: "extras",
    chapter: "Mnemonics & Acronyms",
    unitCode: "mnmnonics-acronyms",
    unitName: "Mna Mna",
    deckType: "list",
    data: mnemonics
  }

}