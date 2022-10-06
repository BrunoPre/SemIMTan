/** Utility script to format TAN's stop names by removing extra hyphens on nouns.
 * Use case: after JSON conversion, run it when a new version of the CSV files is published by TAN/NM
 * Run: `node <this_script>.ts`
 */
import { Api_constants } from "../assets/api_constants"; // static methods
import * as fs from "fs";
import { RouteAttributes } from "../../types/RouteAttributes";
import { HyphenedStopName } from "../../types/HyphenedStopName";

const STOP_NAMES_WITH_HYPHEN: Array<HyphenedStopName> =
  Api_constants.getStopNamesWithHyphen();

const PATH_JSON_FILE = "../assets/json/routes.json";

let routes: Array<RouteAttributes> = require(PATH_JSON_FILE);

routes.forEach((route: RouteAttributes) => {
  let route_long_name: string = route.route_long_name;

  STOP_NAMES_WITH_HYPHEN.forEach((stopNameWithHyphen: HyphenedStopName) => {
    route_long_name = route_long_name.replace(
      stopNameWithHyphen.original,
      stopNameWithHyphen.formatted
    );
  });

  route.route_long_name = route_long_name;
});

fs.writeFileSync(PATH_JSON_FILE, JSON.stringify(routes, null, 2), "utf-8");
