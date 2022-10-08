/** Utility script to sort lines in the Nantes-ish usual order
 * Requirement: CSV to JSON conversion
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

const PATH_JSON_FILE = "../assets/json/routes.json";

let routes: Array<RouteAttributes> = require(PATH_JSON_FILE);

const compareRoutes = (r1: RouteAttributes, r2: RouteAttributes) => {
  if (r1.route_sort_order < r2.route_sort_order) return -1;
  if (r1.route_sort_order > r2.route_sort_order) return 1;
  return 0;
};

routes = routes.sort((r1, r2) => compareRoutes(r1, r2));

fs.writeFileSync(PATH_JSON_FILE, JSON.stringify(routes, null, 2), "utf-8");
