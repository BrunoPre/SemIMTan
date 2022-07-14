/** Utility script to sort lines in the Nantes-ish usual order
 * Requirement: CSV to JSON conversion
 * Treatment: the expected following order:
 * * tram lines 1->3
 * * BusWay lines 4->5
 * * Chronobus linus Cx (x is 1-or-2-digit integer)
 * * the other lines (bus, night buses, Navibus boats, and so on)
 * NOTE: the actual treatment is to put Chronobus lines between lines 5 and 10, since the given data is sorted that way:
 * * 1->5
 * * 10->192
 * * Chronobuses
 * * the rest: litterals (Express, La Chapelle-sur-Erdre, Navibus...)
 */

const _MAPPING_LINE_TYPE_TO_RANGE = {
  tramway: ["1", "2", "3"],
  busway: ["4", "5"],
  chronobus: ["1", "2", "20", "3", "4", "6", "7", "9"], // C5 has been substituted to Busway no. 5
};

/**
 * Sort Chronobus lines by their `route_short_name` (TAN gives C1,C2,C20,C3,... which is not right for UX)
 * Input data example:
 * ```json
 * {
 *     "route_id": "10-0",
 *     "route_short_name": "10",
 *     "route_long_name": "Gare de Chantenay - Bd de Doulon",
 *     "route_desc": "",
 *     "route_type": 3,
 *     "route_color": "ffed00",
 *     "route_text_color": "000000"
 *   }
 * ```
 * @param r1 first Chronobus line
 * @param r2 second Chronobus line
 * @return {number}
 */
const sortChronobusLines = (r1, r2) => {
  const r1_label = r1.route_short_name;
  const r2_label = r2.route_short_name;

  // in-line function to get rid of the first "C" character and the hyphen
  const getNumberOnly = (route_name) =>
    parseInt(route_name.slice(1).split("-")[0]);

  const r1_number = getNumberOnly(r1_label);
  const r2_number = getNumberOnly(r2_label);
  if (r1_number < r2_number) {
    return -1;
  }
  if (r1_number > r2_number) {
    return 1;
  }
  return 0;
};

var fs = require("fs");

const PATH_JSON_FILE = "./assets/json/routes.json";

let routes = require(PATH_JSON_FILE);

let i = 0;

// breakpoints to split the array
const lastBuswayLine =
  _MAPPING_LINE_TYPE_TO_RANGE.busway[
    _MAPPING_LINE_TYPE_TO_RANGE.busway.length - 1
  ];
const firstChronobusLine = _MAPPING_LINE_TYPE_TO_RANGE.chronobus[0];
const lastChronobusLine =
  _MAPPING_LINE_TYPE_TO_RANGE.chronobus[
    _MAPPING_LINE_TYPE_TO_RANGE.chronobus.length - 1
  ];

console.log(lastChronobusLine);

let lastBusWayIndex = 0;
let firstChronobusIndex = 0;
let lastChronobusIndex = 0;

// find the breakpoint in the array
while (i < routes.length) {
  if (routes[i].route_short_name === lastBuswayLine.toString()) {
    lastBusWayIndex = i;
  }
  if (routes[i].route_short_name === "C" + firstChronobusLine.toString()) {
    firstChronobusIndex = i;
  }

  if (routes[i].route_short_name === "C" + lastChronobusLine.toString()) {
    lastChronobusIndex = i;
    break; // no need to iterate till the end
  }

  i++;
  console.log(lastBusWayIndex, firstChronobusIndex, lastChronobusIndex);
}

console.log(lastBusWayIndex, firstChronobusIndex, lastChronobusIndex);

const firstLines = routes.slice(0, lastBusWayIndex + 1); // 'end' is not included, hence +1
const classicBuses = routes.slice(lastBusWayIndex + 1, firstChronobusIndex); // from the first bus line to the first Chronobus line (excluded)
let chronobuses = routes.slice(firstChronobusIndex, lastChronobusIndex + 1); // chronobus lines
chronobuses.sort(sortChronobusLines);
const lastLines = routes.slice(lastChronobusIndex + 1, routes.length); // last lines

console.log(firstLines, classicBuses, chronobuses, lastLines);
routes = firstLines.concat(chronobuses);
routes = routes.concat(classicBuses);
routes = routes.concat(lastLines);

fs.writeFileSync(PATH_JSON_FILE, JSON.stringify(routes, null, 2), "utf-8");
