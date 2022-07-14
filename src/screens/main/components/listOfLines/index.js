import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HorizontalBar from "../horizontalBar";
import LineCard from "./components/lineCard";
import getRoutes from "../../../../api/helper";
import CONSTANTS from "../constants";
import { RFPercentage } from "react-native-responsive-fontsize";

const FONT_PERCENTAGE = CONSTANTS.FONT_PERCENTAGES.SUBHEADING;

const paddingValue = 20;

export default function ListOfLines() {
  const routes = getRoutes(); // array of objects

  //console.log(routes);

  function getHeadingFontSize() {
    return StyleSheet.flatten(styles.heading).fontSize;
  }

  // for Array.map
  function buildLineCard(route_obj, index) {
    const commonProps = {
      fontSize: getHeadingFontSize(),
      route: route_obj,
    };
    return <LineCard key={index} {...commonProps}></LineCard>;
  }

  let routesToBeRendered = routes.map((route_obj, i) =>
    buildLineCard(route_obj, i)
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lignes</Text>
      <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
      {routesToBeRendered}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingValue,
    //alignSelf: "stretch", // fill the screen's width as this is a child component
  },
  heading: {
    color: "black",
    fontSize: RFPercentage(FONT_PERCENTAGE),
    fontWeight: "bold",
  },
});
