import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ApiHelper } from "../../../../api/helper";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from "../constants";

export default function LineNumberIcon(props) {
  /* props = {
      line_number: string
      isRatio1by1: boolean
      iconTextSize: string ("small" | "big")
      iconMaxHeight: ?number
      iconMaxWidth: ?number
  } */
  const [line, setLine] = useState(undefined);

  const apiHelper = new ApiHelper();

  const route = props.line_number;
  const isRatio1by1 = props.isRatio1by1;

  useEffect(() => {
    const _routeAttrs = apiHelper.getRouteAttributesByLineNumber(route);
    setLine(_routeAttrs);
  }, []);

  if (typeof line === "undefined" || line === {}) return null;

  const route_color = line["route_color"];
  const route_text_color = line["route_text_color"];
  const short_name = line["route_short_name"];

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
            Constants.FONT_VALUES.ICON_LINE_NUMBER[
              props.iconTextSize === "small" ? "SMALL" : "LARGE"
            ]
          ),
          fontWeight: "bold",
        }}
        adjustsFontSizeToFit={true}
      >
        {short_name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lineRouteNumber: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    //height: 20,
  },
});
