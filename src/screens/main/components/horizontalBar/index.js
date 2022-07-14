import React from "react";
import { StyleSheet, Text, View } from "react-native";

const paddingValue = 20;

export default function HorizontalBar(props) {
  return <View style={styles(props.paddingType).horizontalBar} />;
}
const styles = (paddingType) =>
  StyleSheet.create({
    horizontalBar: {
      paddingTop: paddingType === "paddingTop" ? paddingValue : 0,
      paddingBottom: paddingType === "paddingBottom" ? paddingValue : 0,
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
      //alignSelf: "stretch",
    },
  });
