import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import LineCard from "./components/lineCard";
import { ApiHelper } from "../../../../api/helper";
import { RouteAttributes } from "../../../../types/RouteAttributes";
import { NSSProps } from "../../../../types/NSSProps";

const ListOfLines: React.FC<NSSProps<"ListOfLines">> = () => {
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

  return <ScrollView style={styles.container}>{routesToBeRendered}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListOfLines;
