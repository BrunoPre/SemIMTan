import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Heading from "./components/heading";
import HorizontalBar from "./components/horizontalBar";
import ListOfStops from "./components/listOfStops";
import ListOfLines from "./components/listOfLines";
import { RFValue } from "react-native-responsive-fontsize";
import CONSTANTS from "./components/constants";

const PADDING_SIDES = CONSTANTS.PADDING_GLOBAL.SIDES;
const PADDING_BORDER = CONSTANTS.PADDING_GLOBAL.BORDER;
const FONT_VALUE = CONSTANTS.FONT_VALUES.SUBHEADING;

export default function Main() {
  let statusBarStyle =
    styles.containerSafeAreaView.backgroundColor === "white"
      ? "dark-content"
      : "light-content";
  let statusBarTransition = "none"; // "fade" | "slide" ; iOS specific
  let statusBarIsAnimated = true;
  let statusBarIsHidden = false;

  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <StatusBar
        animated={statusBarIsAnimated}
        backgroundColor="black" // Android
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition} // Android
        hidden={statusBarIsHidden}
      />
      <View style={styles.containerScrollView}>
        <Heading></Heading>
        <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
        <Text style={styles.pageHeading}>Arrêts</Text>
        <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
        <ScrollView>
          {/* TODO: render selected component */}
          {/*<ListOfLines></ListOfLines>*/}
          <ListOfStops></ListOfStops>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "left",
    paddingTop: StatusBar.currentHeight,
  },
  containerScrollView: {
    alignSelf: "stretch",
    paddingLeft: PADDING_SIDES,
    paddingRight: PADDING_SIDES,
  },
  pageHeading: {
    color: "black",
    fontSize: RFValue(FONT_VALUE),
    fontWeight: "bold",
    paddingTop: PADDING_BORDER,
  },
});
