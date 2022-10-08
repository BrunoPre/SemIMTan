import { HyphenedStopName } from "../../types/HyphenedStopName";
import { RouteAttributes } from "../../types/RouteAttributes";

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

  static UNACTIVE_ROUTES: Array<RouteAttributes> = [
    {
      route_id: "1B-0",
      route_short_name: "1B",
      route_long_name: "François Mitterrand / Jamet - Beaujoire / Ranzay", // not sure
      route_desc: "",
      route_type: 3,
      route_color: "007a45",
      route_text_color: "ffffff",
      route_sort_order: 2,
    },
    {
      route_id: "2B-0",
      route_short_name: "2B",
      route_long_name: "Orvault Grand Val - Gare de Pont Rousseau", // not sure
      route_desc: "",
      route_type: 3,
      route_color: "e53138",
      route_text_color: "ffffff",
      route_sort_order: 4,
    },
  ];
}
