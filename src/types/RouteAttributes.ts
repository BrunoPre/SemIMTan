/* Example:
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
export interface RouteAttributes {
  route_id: string;
  route_short_name: string;
  route_long_name: string;
  route_desc: string;
  route_type: number;
  route_color: string;
  route_text_color: string;
}
