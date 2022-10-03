import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import CONSTANTS from "../constants";
import StopCard from "./components/stopCard";
import { ApiHelper } from "../../../../api/helper";
import { LineNumber, Stop } from "../../../../types/Stop";
import { RouteAttributes } from "../../../../types/RouteAttributes";
import {
  iconTextSizeValues,
  LineNumberIconProps,
} from "../../../../types/props/LineNumberIconProps";
import { RFValue } from "react-native-responsive-fontsize";
import LineNumberIcon from "../lineNumberIcon";
import { StopCardPropsType } from "../../../../types/props/StopCardProps";
import { NSSProps } from "../../../../types/NSSProps";

const FONT_VALUE = CONSTANTS.FONT_VALUES.TEXT;

const ListOfStops: React.FC<NSSProps<"ListOfStops">> = () => {
  const [allStops, setAllStops] = useState([] as Array<Stop>);
  const [allLineNumberCards, setAllLineNumberCards] = useState(
    new Map<string, JSX.Element>()
  );

  /* retrieve all stops from OpenTAN API */
  const apiHelper: ApiHelper = new ApiHelper();
  //const MAX_NUMBER_STOPS: number = 10; // for dev purposes
  const getStops = async () =>
    apiHelper
      .getAllStops()
      //.then((res) => setAllStops(res.slice(0, MAX_NUMBER_STOPS))) // for dev purposes
      .then((res: Stop[]) => setAllStops(res))
      .catch((err) => console.error(err));

  /* prepare each LineNumberIcon component per line/route
    & store them to avoid multiple component build and memory overwork */
  const _setAllLineNumberCards = () => {
    /* since a route/line is unique,
    using its `short_name` as a key (both for Map and JSX.Element)
    makes the component unique */
    let allLineNumberIcons = new Map<string, JSX.Element>();
    const allRoutes: Array<RouteAttributes> = apiHelper.getRoutes();

    /* prepare styling */
    // a LineNumber icon should be as tall as the font used for both stop name and line/route name
    const _heightSize: number = RFValue(FONT_VALUE);
    let _props: LineNumberIconProps = {
      lineNumber: "",
      isRatio1by1: false,
      iconTextSize: iconTextSizeValues.small,
      iconMaxHeight: _heightSize,
    };

    allRoutes.forEach((route: RouteAttributes) => {
      _props.lineNumber = route.route_short_name;
      // keep ratio for 1-2-letter lineNumbers
      if (route.route_short_name.length < 3) {
        _props.iconMaxWidth = _heightSize;
      } else {
        delete _props.iconMaxWidth;
      }
      const _lineNumberIconComponent: JSX.Element = (
        <LineNumberIcon
          key={route.route_short_name}
          {..._props}
        ></LineNumberIcon>
      );
      allLineNumberIcons.set(route.route_short_name, _lineNumberIconComponent);
    });

    setAllLineNumberCards(allLineNumberIcons);
  };

  useEffect(() => {
    getStops().then(() => _setAllLineNumberCards());
  }, []);

  // factory of StopCard components
  function buildStopCard(stop: Stop): JSX.Element {
    const _stopLines: Array<LineNumber> = stop.ligne;

    /* get all required LineNumberIcon components for this stop */
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

  // build all the StopCards
  const stopCardsToBeRendered: Array<JSX.Element> = allStops.map((stop: Stop) =>
    buildStopCard(stop)
  );

  return (
    <ScrollView style={styles.container}>{stopCardsToBeRendered}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListOfStops;
