import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  StatusBarStyle,
} from "react-native";
import Heading from "./components/heading";
import ListOfStops from "./components/listOfStops";
import ListOfLines from "./components/listOfLines";
import { RFValue } from "react-native-responsive-fontsize";
import CONSTANTS from "./components/constants";
import { EmptyProps } from "../../types/props/EmptyProps";
import { i18N } from "../../utils/language.utils";
import Banner from "./components/banner";
import { BannerProps } from "../../types/props/BannerProps";

const PADDING_SIDES: number = CONSTANTS.PADDING_GLOBAL.SIDES;
const PADDING_BORDER: number = CONSTANTS.PADDING_GLOBAL.BORDER;
const FONT_VALUE: number = CONSTANTS.FONT_VALUES.SUBHEADING;

const Main: React.FC<EmptyProps> = () => {
  const statusBarStyle: StatusBarStyle =
    styles.containerSafeAreaView.backgroundColor === "white"
      ? "dark-content"
      : "light-content";
  const statusBarTransition = "none"; // "fade" | "slide" ; iOS specific
  const statusBarIsAnimated: boolean = true;
  const statusBarIsHidden: boolean = false;

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
        <Banner
          {...({ bannerTitle: i18N.t("STOPS_title") } as BannerProps)}
        ></Banner>
        <ScrollView>
          {/* TODO: render selected component */}
          {/*<ListOfLines></ListOfLines>*/}
          <ListOfStops></ListOfStops>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: "white",
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

export default Main;
