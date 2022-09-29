import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "../constants";

const paddingValue = Constants.PADDING_GLOBAL.BORDER;

export default function HorizontalBar(props) {
  /*
    props = {
        paddingType: string ("paddingBottom" | "paddingTop" | "")
    }
     */
  return <View style={styles(props.paddingType).horizontalBar} />;
}
const styles = (paddingType) =>
  StyleSheet.create({
    horizontalBar: {
      paddingTop: paddingType === "paddingTop" ? paddingValue : 0,
      paddingBottom: paddingType === "paddingBottom" ? paddingValue : 0,
      borderBottomColor: "black",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
