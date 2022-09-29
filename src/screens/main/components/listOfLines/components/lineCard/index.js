import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalBar from "../../../horizontalBar";
import LineNumberIcon from "../../../lineNumberIcon";
import Constants from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";

const PADDING_AROUND = Constants.PADDING_GLOBAL.SIDES;
const FONT_VALUE = Constants.FONT_VALUES.TEXT;

export default function LineCard(props) {
  /* props = {
        route : {
            route_id,route_short_name,route_long_name,route_desc,route_type,route_color,route_text_color
        }
    } */
  const long_name_splitted = props.route.route_long_name.split(" - "); // remove annoying hyphen between the final stops
  const long_name = long_name_splitted[0] + "\n" + long_name_splitted[1];

  const _propsLineNumberIcon = {
    line_number: props.route.route_short_name,
    isRatio1by1: true,
    iconTextSize: "large",
  };

  return (
    <View style={{ padding: PADDING_AROUND }}>
      <TouchableOpacity>
        <View style={styles.container}>
          <LineNumberIcon {..._propsLineNumberIcon}></LineNumberIcon>

          <View style={styles.lineRoute}>
            <Text style={{ fontSize: RFValue(FONT_VALUE) }}>{long_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lineRoute: {
    flex: 10,
    paddingLeft: Constants.PADDING_GLOBAL.SIDES, // leave space between LineNumberIcon & text
    justifyContent: "center",
  },
});
