import React from "react";
import { StyleSheet, View } from "react-native";
import LineCard from "./components/lineCard";
import CONSTANTS from "../constants";
import { ApiHelper } from "../../../../api/helper";

const paddingValue = CONSTANTS.PADDING_GLOBAL.SIDES;

export default function ListOfLines() {
  const apiHelper = new ApiHelper();
  const routes = apiHelper.getRoutes(); // array of objects

  // for Array.map
  function buildLineCard(route_obj, index) {
    const commonProps = {
      route: route_obj,
    };
    return <LineCard key={index} {...commonProps}></LineCard>;
  }

  let routesToBeRendered = routes.map((route_obj, i) =>
    buildLineCard(route_obj, i)
  );

  return <View style={styles.container}>{routesToBeRendered}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingValue,
  },
});
