/** Utility script to sort lines in the Nantes-ish usual order for StopCards
 * Requirement: JSON extract of all stops
 * Treatment: the expected following order:
 * * tram lines 1->3
 * * BusWay lines 4->5
 * * Chronobus linus Cx (x is 1-or-2-digit integer)
 * * the other lines (bus, night buses, Navibus boats, and so on)
 *
 * Run: `ts-node <this_script>.ts`
 */

import * as fs from "fs";
import { RouteAttributes } from "../../types/RouteAttributes";
import { LineNumber, Stop } from "../../types/Stop";
import { Api_constants } from "../assets/api_constants";

const PATH_JSON_FILE_STOPS = "../assets/json/ALL_STOPS_EXTRACT.json";
const PATH_JSON_FILE_ROUTES = "../assets/json/routes.json";

let routes: Array<RouteAttributes> = require(PATH_JSON_FILE_ROUTES);

let stops: Array<Stop> = require(PATH_JSON_FILE_STOPS);

const compareRoutes = (r1: RouteAttributes, r2: RouteAttributes) => {
  if (r1.route_sort_order < r2.route_sort_order) return -1;
  if (r1.route_sort_order > r2.route_sort_order) return 1;
  return 0;
};

function getRouteAttributesByRouteShortName(
  shortName: string,
  arrRoutes: Array<RouteAttributes>
): RouteAttributes | undefined {
  return arrRoutes.find(
    ({ route_short_name }) => route_short_name === shortName
  );
}

stops.forEach((stop: Stop) => {
  let _stopRoutes = stop.ligne.map((ln: LineNumber) => {
    let _r = getRouteAttributesByRouteShortName(ln.numLigne, routes);
    // stop is visited by a line that's not in the routes extract; let's fallback to constants
    if (_r === undefined) {
      _r = getRouteAttributesByRouteShortName(
        ln.numLigne,
        Api_constants.UNACTIVE_ROUTES
      );
      if (_r === undefined)
        throw new RangeError(
          `Line/Route ${ln.numLigne} not found in UNACTIVE_ROUTES`
        );
    }
    return _r;
  });
  // stop.ligne and _stopRoutes are iso-ordered thanks to `map`
  stop.ligne.sort((ln1, ln2) =>
    compareRoutes(
      _stopRoutes[stop.ligne.indexOf(ln1)],
      _stopRoutes[stop.ligne.indexOf(ln2)]
    )
  );
});

fs.writeFileSync(PATH_JSON_FILE_STOPS, JSON.stringify(stops, null, 2), "utf-8");
