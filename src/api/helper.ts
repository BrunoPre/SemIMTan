import { RouteAttributes } from "../types/RouteAttributes";

const _routes = require("./assets/json/routes.json");
import { Api_constants } from "./assets/api_constants"; // static methods
import { Stop } from "../types/Stop";
import { ALL_STOPS_EXTRACT } from "./assets/json/ALL_STOPS_EXTRACT";
const BASE_URL = "http://open.tan.fr/";

export class ApiHelper {
  private readonly routes: Array<RouteAttributes> = [];
  constructor() {
    this.routes = _routes;
  }

  /**
   * Get routes from local converted routes.json file.
   * @returns {Array<RouteAttributes>}
   */
  getRoutes(): Array<RouteAttributes> {
    return this.routes;
  }

  getConstsClass(): Api_constants {
    return Api_constants;
  }

  /**
   * Get the list of all stops
   * @returns {Promise<Array<Stop>>} Array of objects following this schema
   * ```json
   *   {
   *         "codeLieu": "ACHA",
   *         "libelle": "Angle Chaillou",
   *         "distance": null,
   *         "ligne": [
   *             {
   *                 "numLigne": "126"
   *             },
   *             {
   *                 "numLigne": "96"
   *             }
   *         ]
   *     }
   * ```
   */
  async getAllStops(): Promise<Array<Stop>> {
    return fetch(BASE_URL + "ewp/arrets.json", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept-Language": "fr_FR",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res: Response) => res.json())
      .catch((err) => {
        if (err instanceof SyntaxError)
          console.log("CORS error when fetching allStops OpenTAN's API");
        else console.error("getAllStops() failed with error: ", err);

        /* FALLBACK to JSON extract */
        return ALL_STOPS_EXTRACT;
      });
  }

  /**
   * Get a route's attributes, given its line number.
   * @returns {RouteAttributes} Object with this schema
   * ```json
   *    {
   *     "route_id": "89-0",
   *     "route_short_name": "89",
   *     "route_long_name": "Le Cardo - Beauséjour",
   *     "route_desc": "",
   *     "route_type": 3,
   *     "route_color": "77ad1c",
   *     "route_text_color": "ffffff"
   *   },
   * ```
   */
  getRouteAttributesByLineNumber(lineNumber = ""): RouteAttributes | undefined {
    if (lineNumber === "") return undefined;
    return this.getRoutes().find(
      (route: RouteAttributes) => route["route_short_name"] === lineNumber
    );
  }
}
