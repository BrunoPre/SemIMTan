import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HorizontalBar from "../../../horizontalBar";
import LineNumberIcon from "../../../lineNumberIcon";
import CONSTANTS from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";

const FONT_VALUE = CONSTANTS.FONT_VALUES.TEXT;
const PADDING_AROUND = CONSTANTS.PADDING_GLOBAL.SIDES;

export default function StopCard(props) {
  /* props = {
        stop : {
            "codeLieu": "ACHA",
            "libelle": "Angle Chaillou",
            "distance": null,
            "ligne": [ // CAN BE EMPTY ARRAY
                {
                    "numLigne": "126"
                },
                {
                    "numLigne": "96"
                }
            ]
        }
    } */

  const [heightSize, setHeightSize] = useState(0);
  const stop = props.stop;
  const stopName = stop.libelle;
  const linesAvailable = stop.ligne; // array

  /* avoid unused stops */
  if (linesAvailable.length === 0) return null;

  let lineNumberCardsToBeRendered = linesAvailable.map((line_obj, i) => {
    const commonProps = {
      line_number: line_obj["numLigne"],
      isRatio1by1: false,
      iconTextSize: "small",
      iconMaxHeight: heightSize, // keep ratio
    };
    // keep ratio for 1-2-letter lineNumbers
    if (line_obj["numLigne"].length < 3) {
      commonProps["iconMaxWidth"] = heightSize;
    }
    return <LineNumberIcon key={i} {...commonProps}></LineNumberIcon>;
  });

  const callBackTextLayout = useCallback(
    (e) => setHeightSize(e.nativeEvent.lines[0].height),
    []
  );
  return (
    <View style={{ padding: PADDING_AROUND }}>
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.stopName}>
            <Text
              style={{ fontSize: RFValue(FONT_VALUE) }}
              onTextLayout={callBackTextLayout}
            >
              {stopName}
            </Text>
          </View>

          <View style={styles.lineNumbersContainer}>
            {lineNumberCardsToBeRendered}
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
    //alignItems: "center",
    justifyContent: "space-around",
    //alignSelf: "stretch",
  },
  lineNumbersContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    //alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-end",
  },
  stopName: {
    //flex: 2,
    flexDirection: "row",
    //flexWrap: "wrap",
    direction: "ltr",
    alignItems: "center",
  },
});
