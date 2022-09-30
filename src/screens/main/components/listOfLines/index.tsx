import React from "react";
import { StyleSheet, View } from "react-native";
import LineCard from "./components/lineCard";
import CONSTANTS from "../constants";
import { ApiHelper } from "../../../../api/helper";
import { EmptyProps } from "../../../../types/props/EmptyProps";
import { RouteAttributes } from "../../../../types/RouteAttributes";

const paddingValue: number = CONSTANTS.PADDING_GLOBAL.SIDES;

const ListOfLines: React.FC<EmptyProps> = () => {
  const apiHelper: ApiHelper = new ApiHelper();
  const routes: Array<RouteAttributes> = apiHelper.getRoutes(); // array of objects

  // for Array.map
  function buildLineCard(
    routeAttrs: RouteAttributes,
    index: number
  ): JSX.Element {
    return <LineCard key={index} {...routeAttrs}></LineCard>;
  }

  const routesToBeRendered: Array<JSX.Element> = routes.map(
    (routeAttrs: RouteAttributes, index: number) =>
      buildLineCard(routeAttrs, index)
  );

  return <View style={styles.container}>{routesToBeRendered}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingValue,
  },
});

export default ListOfLines;
