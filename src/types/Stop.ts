export interface Stop {
  codeLieu: string;
  libelle: string;
  distance: string | null;
  ligne: Array<LineNumber>;
}
export interface LineNumber {
  numLigne: string;
}
