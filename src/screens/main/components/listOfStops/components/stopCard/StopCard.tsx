import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalBar from "../../../horizontalBar/HorizontalBar";
import CONSTANTS from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import {
  StopCardProps,
  StopCardPropsType,
} from "../../../../../../types/props/StopCardProps";
import { LineNumber, Stop } from "../../../../../../types/Stop";
import { i18N } from "../../../../../../utils/language.utils";

const FONT_VALUE = CONSTANTS.FONT_VALUES.TEXT;
const PADDING_TOP_BOTTOM = CONSTANTS.PADDING_GLOBAL.BORDER;
const PADDING_SIDES = CONSTANTS.PADDING_GLOBAL.SIDES;

const StopCard: React.FC<StopCardProps> = (props: StopCardPropsType) => {
  /* get Stop information & injected lineNumberIcon component */
  const stop: Stop = props[0];
  const lineNumberIconComponents: Array<JSX.Element> = props[1];
  const stopName: string = stop.libelle;
  const linesAvailable: Array<LineNumber> = stop.ligne;

  /* avoid unused stops */
  if (linesAvailable.length === 0) return null;

  /* build accessibilityLabel */
  const getAccessibilityLabel = () => {
    const linesLabel: string = i18N.t(
      "LINES_" +
        (linesAvailable.length === 1 ? "singular" : "plural") +
        "_label"
    );
    const linesPhrase: string = linesAvailable.reduce(
      (linesPhrase: string, lineNumber: LineNumber) =>
        linesPhrase + lineNumber.numLigne,
      ""
    );
    return stopName + " " + linesLabel + " " + linesPhrase;
  };

  return (
    <View>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={getAccessibilityLabel()}
        accessibilityRole={"button"}
        style={styles.touchableContainer}
      >
        <View style={styles.mainContainer}>
          <View style={styles.stopName}>
            <Text style={{ fontSize: RFValue(FONT_VALUE) }}>{stopName}</Text>
          </View>

          <View style={styles.lineNumbersContainer}>
            {lineNumberIconComponents}
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
  lineNumbersContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  stopName: {
    flexDirection: "row",
    direction: "ltr",
    alignItems: "center",
  },
});

export default StopCard;
