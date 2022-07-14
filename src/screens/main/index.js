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
import ListOfLines from "./components/listOfLines";
import HorizontalBar from "./components/horizontalBar";

const paddingSides = 10;

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
      <ScrollView style={styles.containerScrollView}>
        <Heading></Heading>
        <HorizontalBar paddingType={"paddingBottom"}></HorizontalBar>
        {/* TODO: render selected component */}
        <ListOfLines></ListOfLines>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "left",
    paddingTop: StatusBar.currentHeight, // TODO: replace it with the right prop for status bar
    //paddingRight: paddingSides,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  containerScrollView: {
    alignSelf: "stretch",
    paddingLeft: paddingSides,
    paddingRight: paddingSides,
  },
});
