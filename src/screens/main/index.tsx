import React from "react";
import { StatusBar, StyleSheet, StatusBarStyle } from "react-native";
import ListOfStops from "./components/listOfStops";
import ListOfLines from "./components/listOfLines";
import { RFValue } from "react-native-responsive-fontsize";
import CONSTANTS from "./components/constants";
import { EmptyProps } from "../../types/props/EmptyProps";
import { i18N } from "../../utils/language.utils";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/home";
import { RootStackParamList } from "../../types/RootStackParamList";
import { createDrawerNavigator } from "@react-navigation/drawer";

const PADDING_SIDES: number = CONSTANTS.PADDING_GLOBAL.SIDES;
const PADDING_BORDER: number = CONSTANTS.PADDING_GLOBAL.BORDER;
const FONT_VALUE: number = CONSTANTS.FONT_VALUES.SUBHEADING;

const RootStack = createDrawerNavigator<RootStackParamList>();

const Main: React.FC<EmptyProps> = () => {
  const statusBarStyle: StatusBarStyle =
    styles.containerSafeAreaView.backgroundColor === "white"
      ? "dark-content"
      : "light-content";
  const statusBarTransition = "none"; // "fade" | "slide" ; iOS specific
  const statusBarIsAnimated: boolean = true;
  const statusBarIsHidden: boolean = false;

  return (
    <NavigationContainer>
      <StatusBar
        animated={statusBarIsAnimated}
        backgroundColor="black" // Android
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition} // Android
        hidden={statusBarIsHidden}
      />
      <RootStack.Navigator initialRouteName={"Home"}>
        <RootStack.Screen
          name={"Home"}
          component={Home}
          options={{ title: i18N.t("HOME_title") }}
        />

        <RootStack.Screen
          name={"ListOfLines"}
          component={ListOfLines}
          options={{ title: i18N.t("LINES_title") }}
        />
        <RootStack.Screen
          name={"ListOfStops"}
          component={ListOfStops}
          options={{ title: i18N.t("STOPS_title") }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
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
