import { HyphenedStopName } from "../../types/HyphenedStopName";

export class Api_constants {
  static getStopNamesWithHyphen = () => this.STOP_NAMES_WITH_HYPHEN;

  static STOP_NAMES_WITH_HYPHEN: Array<HyphenedStopName> = [
    {
      original: "Foch - Cathédrale",
      formatted: "Foch-Cathédrale",
    },
    {
      original: "Mendès France - Bellevue",
      formatted: "Mendès France-Bellevue",
    },
    {
      original: "Orvault - Morlière",
      formatted: "Orvault-Morlière",
    },
    {
      original: "Haluchère - Batignolles",
      formatted: "Haluchère-Batignolles",
    },
    {
      original: "Ecole Centrale - Audencia",
      formatted: "Ecole Centrale-Audencia",
    },
    {
      original: "Trentemoult - Roquios",
      formatted: "Trentemoult-Roquios",
    },
  ];
}
