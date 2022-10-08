import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from "../constants";
import { LineNumberIconProps } from "../../../../types/props/LineNumberIconProps";
import { RouteAttributes } from "../../../../types/RouteAttributes";

const LineNumberIcon: React.FC<LineNumberIconProps> = (props) => {
  const line: RouteAttributes = props.routeAttrs;
  const isRatio1by1: boolean = props.isRatio1by1;

  const route_color: string = line.route_color;
  const route_text_color: string = line.route_text_color;
  const short_name: string = line.route_short_name;

  return (
    <View
      style={[
        styles.lineRouteNumber,
        {
          backgroundColor: "#" + route_color,
          borderColor: "rgba(0, 0, 0, 0.44)",
          borderWidth: route_color === "ffffff" ? 1 : 0, // some routes have white background color (e.g. school buses)
        },
        isRatio1by1 || [1, 2].includes(short_name.length)
          ? { aspectRatio: 1 }
          : {}, // 1-letter line icons should be 1:1 ratio instead of being flatten
        // keep ratio for stopCards
        props.iconMaxHeight ? { maxHeight: props.iconMaxHeight } : {},
        props.iconMaxWidth ? { maxWidth: props.iconMaxWidth } : {},
      ]}
    >
      <Text
        style={{
          color: "#" + route_text_color,
          fontSize: RFValue(
            Constants.FONT_VALUES.ICON_LINE_NUMBER[props.iconTextSize]
          ),
          fontWeight: "bold",
        }}
        adjustsFontSizeToFit={true}
      >
        {short_name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lineRouteNumber: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default LineNumberIcon;
