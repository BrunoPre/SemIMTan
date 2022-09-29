const routes = require("./assets/json/routes.json");
import { Api_constants } from "./assets/api_constants.js"; // static methods
const BASE_URL = "http://open.tan.fr/";

export class ApiHelper {
  constructor() {
    this.routes = routes;
  }
  /**
   * Get routes from local converted routes.json file.
   * @returns {Array<Object>} Array of objects with the following keys: `route_id,route_short_name,route_long_name,route_desc,route_type,route_color,route_text_color`
   */
  getRoutes() {
    return this.routes;
  }

  getConstsClass() {
    return Api_constants;
  }

  /**
   * Get the list of all stops
   * @returns {Array<Object>} Array of objects following this schema
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
  async getAllStops() {
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
      .then((res) => res.json())
      .catch((err) => {
        if (err instanceof SyntaxError)
          console.log("CORS error when fetching allStops OpenTAN's API");
        else console.error("getAllStops() failed with error: ", err);

        /* FALLBACK to JSON extract */
        return require("./assets/json/ALL_STOPS_EXTRACT.js").ALL_STOPS_EXTRACT;
      });
  }

  /**
   * Get a route's attributes, given its line number.
   * @returns {Object} Object with this schema
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
  getRouteAttributesByLineNumber(lineNumber = "") {
    if (lineNumber === "") return { route_id };
    return this.getRoutes().find(
      (route) => route["route_short_name"] === lineNumber
    );
  }
}
