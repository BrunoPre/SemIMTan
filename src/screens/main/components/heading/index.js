import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import CONSTANTS from "./../constants.js";

const FONT_PERCENTAGE = CONSTANTS.FONT_PERCENTAGES.HEADING;

export default function Heading() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        <Text style={styles.h_green_darker}>Sem</Text>
        <Text style={styles.h_green_lighter}>'</Text>
        <Text style={styles.h_blue_imt}>imt</Text>
        <Text style={styles.h_green_lighter}>'</Text>
        <Text style={styles.h_green_darker}>an</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "black",
    fontSize: RFPercentage(FONT_PERCENTAGE),
    fontWeight: "bold",
  },
  h_green_darker: {
    color: "#519735",
  },
  h_green_lighter: {
    color: "#ABCB91",
  },
  h_blue_imt: {
    color: "#00B8DE",
  },
});
