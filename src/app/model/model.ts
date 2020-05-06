export class Paragraph {
  id: number;
  title: string;
  textCondensed: string;
  textFull: string;
  references: Reference[];
  highlightLaw: number[];
  highlightEconomy: number[];
  highlightIT: number[];
  highlightApp: number[];
}

export class Page {
  type: string;
  paragraphs: Paragraph[];
  references: Reference[];
}

export class Reference {
  link: string;
  name: string;
}
