import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HorizontalBar from "../../../horizontalBar";

export default function LineCard(props) {
  /* props = {
        fontSize : number,
        route : {
            route_id,route_short_name,route_long_name,route_desc,route_type,route_color,route_text_color
        }
    } */
  const route = props.route;
  const short_name = route.route_short_name;
  const long_name_splitted = route.route_long_name.split(" - "); // remove annoying hyphen between the final stops
  const long_name = long_name_splitted[0] + "\n" + long_name_splitted[1];
  const route_text_color = route.route_text_color;
  const route_color = route.route_color;
  const fontSize = props.fontSize;

  return (
    <View style={styles.container}>
      <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
      <View
        style={[
          styles.lineRouteNumber,
          {
            backgroundColor: "#" + route_color,
            borderColor: "rgba(0, 0, 0, 0.44)",
            borderWidth: route_color === "ffffff" ? 1 : 0, // some routes have white background color
          },
        ]}
      >
        <Text
          style={{
            color: "#" + route_text_color,
            fontSize: fontSize * 0.85,
            fontWeight: "bold",
          }}
          adjustsFontSizeToFit={true} // TODO
        >
          {short_name}
        </Text>
      </View>
      <View style={styles.lineRoute}>
        <Text style={{ fontSize: fontSize * 0.85 }}>{long_name}</Text>
      </View>
      <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  lineRouteNumber: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    /* LAYOUT TESTS
    borderColor: "#000000",
    borderWidth: 1,*/
  },
  lineRoute: {
    flex: 10,
    paddingLeft: 10,
    justifyContent: "center",
    /* LAYOUT TESTS
    borderColor: "#000000",
    borderWidth: 1,*/
  },
});
