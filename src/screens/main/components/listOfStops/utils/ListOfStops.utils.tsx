import {
  EMPTY_ROUTE,
  RouteAttributes,
} from "../../../../../types/RouteAttributes";
import { RFValue } from "react-native-responsive-fontsize";
import {
  iconTextSizeValues,
  LineNumberIconProps,
} from "../../../../../types/props/LineNumberIconProps";
import LineNumberIcon from "../../lineNumberIcon";
import React from "react";
import { LineNumber, Stop } from "../../../../../types/Stop";
import { StopCardPropsType } from "../../../../../types/props/StopCardProps";
import StopCard from "../components/stopCard";
import { ApiHelper } from "../../../../../api/helper";
import CONSTANTS from "../../constants";

const FONT_VALUE = CONSTANTS.FONT_VALUES.TEXT;

/** Builds all the LineNumberIcon components for all the lines
 */
export function buildAllLineNumberIcons(): Map<string, JSX.Element> {
  /* since a route/line is unique,
    using its `short_name` as a key (both for Map and JSX.Element)
    makes the component unique */
  let allLineNumberIcons = new Map<string, JSX.Element>();
  const allRoutes: Array<RouteAttributes> = new ApiHelper().getRoutes();

  /* prepare styling */
  // a LineNumber icon should be as tall as the font used for both stop name and line/route name
  const _heightSize: number = RFValue(FONT_VALUE);
  let _props: LineNumberIconProps = {
    isRatio1by1: false,
    iconTextSize: iconTextSizeValues.small,
    iconMaxHeight: _heightSize,
    routeAttrs: EMPTY_ROUTE,
  };

  allRoutes.forEach((route: RouteAttributes) => {
    _props.routeAttrs = route;
    // keep ratio for 1-2-letter lineNumbers
    if (route.route_short_name.length < 3) {
      _props.iconMaxWidth = _heightSize;
    } else {
      delete _props.iconMaxWidth;
    }
    const _lineNumberIconComponent: JSX.Element = (
      <LineNumberIcon key={route.route_short_name} {..._props}></LineNumberIcon>
    );
    allLineNumberIcons.set(route.route_short_name, _lineNumberIconComponent);
  });

  return allLineNumberIcons;
}

/** Factory of StopCard components
 * @param stop
 * @param allLineNumberCards
 */
export function buildStopCard(
  stop: Stop,
  allLineNumberCards: Map<string, JSX.Element>
): JSX.Element {
  const _stopLines: Array<LineNumber> = stop.ligne; // must be ordered (see sortStopLinesByRouteSortOrder utility in `api` folder)

  /* get all the required LineNumberIcon components for this stop */
  const lineNumberCards: Array<JSX.Element> = new Array<JSX.Element>();

  _stopLines.forEach((line: LineNumber) => {
    const _lineNumberIcon: JSX.Element | undefined = allLineNumberCards.get(
      line.numLigne
    );
    if (typeof _lineNumberIcon === "undefined") return;

    lineNumberCards.push(_lineNumberIcon);
  });

  const _props: StopCardPropsType = [stop, lineNumberCards];

  return <StopCard key={stop.codeLieu} {..._props}></StopCard>;
}

/** Builds all the StopCard components for all the stops given by the extract data
 * @return {Array<StopCard|JSX.Element>} an array of StopCards
 */
export function stopCardsToBeRendered(): Array<JSX.Element> {
  const stops: Array<Stop> = new ApiHelper().getAllStopsExtract();
  const allLineNumberCards: Map<string, JSX.Element> =
    buildAllLineNumberIcons();
  return stops.map((stop: Stop) => buildStopCard(stop, allLineNumberCards));
}
