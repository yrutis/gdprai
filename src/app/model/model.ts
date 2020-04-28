export class Paragraph {
  id: number;
  title: string;
  textCondensed: string;
  textFull: string;
  references: string[];
  highlightLaw: number[];
  highlightEconomy: number[];
  highlightIT: number[];
  highlightApp: number[];
}

export class Page {
  type: string;
  paragraphs: Paragraph[];
}
