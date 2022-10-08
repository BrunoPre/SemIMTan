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
 *     "route_sort_order": 52
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
  route_sort_order: number;
}

export const EMPTY_ROUTE = {
  route_id: "",
  route_short_name: "",
  route_long_name: "",
  route_desc: "",
  route_type: -1,
  route_color: "",
  route_text_color: "",
  route_sort_order: -1,
} as RouteAttributes;
