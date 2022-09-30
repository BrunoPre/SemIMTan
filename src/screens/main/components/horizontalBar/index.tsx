import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "../constants";
import {
  HorizontalBarProps,
  PaddingTypeValues,
} from "../../../../types/props/HorizontalBarProps";
import { HorizontalBarStyle } from "../../../../types/HorizontalBarStyle";

const paddingValue = Constants.PADDING_GLOBAL.BORDER;

const setStyle = (paddingType: PaddingTypeValues | undefined) => {
  let _obj: HorizontalBarStyle = {
    //paddingTop: paddingType === PaddingTypeValues.paddingTop ? paddingValue : 0,
    //paddingBottom: paddingType === PaddingTypeValues.paddingBottom ? paddingValue : 0,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  };
  if (typeof paddingType !== "undefined") _obj[paddingType] = paddingValue;
  return _obj;
};

const HorizontalBar: React.FC<HorizontalBarProps> = (props) => {
  const _paddingType: PaddingTypeValues | undefined = props.paddingType;
  return <View style={styles(_paddingType).horizontalBar} />;
};

const styles = (paddingType: PaddingTypeValues | undefined) =>
  StyleSheet.create({
    horizontalBar: setStyle(paddingType),
  });

export default HorizontalBar;
