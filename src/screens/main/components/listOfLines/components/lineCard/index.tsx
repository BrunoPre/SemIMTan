import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalBar from "../../../horizontalBar";
import LineNumberIcon from "../../../lineNumberIcon";
import Constants from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { LineCardProps } from "../../../../../../types/props/LineCardProps";
import { RouteAttributes } from "../../../../../../types/RouteAttributes";
import {
  iconTextSizeValues,
  LineNumberIconProps,
} from "../../../../../../types/props/LineNumberIconProps";
import {
  HorizontalBarProps,
  PaddingTypeValues,
} from "../../../../../../types/props/HorizontalBarProps";
import CONSTANTS from "../../../constants";

const PADDING_TOP_BOTTOM = CONSTANTS.PADDING_GLOBAL.BORDER;
const PADDING_SIDES = CONSTANTS.PADDING_GLOBAL.SIDES;
const FONT_VALUE: number = Constants.FONT_VALUES.TEXT;

const LineCard: React.FC<LineCardProps> = (props: RouteAttributes) => {
  const long_name_splitted: string[] = props.route_long_name.split(" - "); // remove annoying hyphen between the final stops
  const long_name: string =
    long_name_splitted[0] + "\n" + long_name_splitted[1];

  const _propsLineNumberIcon: LineNumberIconProps = {
    lineNumber: props.route_short_name,
    isRatio1by1: true,
    iconTextSize: iconTextSizeValues.large,
  };

  return (
    <View>
      <TouchableOpacity style={styles.touchableContainer}>
        <View style={styles.mainContainer}>
          <LineNumberIcon {..._propsLineNumberIcon}></LineNumberIcon>

          <View style={styles.lineRoute}>
            <Text style={{ fontSize: RFValue(FONT_VALUE) }}>{long_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <HorizontalBar></HorizontalBar>
    </View>
  );
};
const styles = StyleSheet.create({
  touchableContainer: {
    paddingTop: PADDING_TOP_BOTTOM,
    paddingBottom: PADDING_TOP_BOTTOM,
    paddingLeft: PADDING_SIDES,
    paddingRight: PADDING_SIDES,
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lineRoute: {
    flex: 10,
    paddingLeft: Constants.PADDING_GLOBAL.SIDES, // leave space between LineNumberIcon & text
    justifyContent: "center",
  },
});

export default LineCard;
