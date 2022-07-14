/** Utility script to format TAN's stop names by removing extra hyphens on nouns.
 * Use case: after JSON conversion, run it when a new version of the CSV files is published by TAN/NM
 * Run: `node <this_script>.js`
 */

const STOP_NAMES_WITH_HYPHEN = [
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

var fs = require("fs");

const PATH_JSON_FILE = "./assets/json/routes.json";

let routes = require(PATH_JSON_FILE);

for (let ir in routes) {
  // not the most concise code
  let route_long_name = routes[ir].route_long_name;
  for (const is in STOP_NAMES_WITH_HYPHEN) {
    const stopWithHyphen_original = STOP_NAMES_WITH_HYPHEN[is].original;
    const stopWithHyphen_formatted = STOP_NAMES_WITH_HYPHEN[is].formatted;
    route_long_name = route_long_name.replace(
      stopWithHyphen_original,
      stopWithHyphen_formatted
    );
    routes[ir].route_long_name = route_long_name;
  }
}

fs.writeFileSync(PATH_JSON_FILE, JSON.stringify(routes, null, 2), "utf-8");
