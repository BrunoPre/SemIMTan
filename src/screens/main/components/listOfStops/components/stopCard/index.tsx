import React, { useCallback, useState } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextLayoutEventData,
  TouchableOpacity,
  View,
} from "react-native";
import HorizontalBar from "../../../horizontalBar";
import LineNumberIcon from "../../../lineNumberIcon";
import CONSTANTS from "../../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { StopCardProps } from "../../../../../../types/props/StopCardProps";
import { LineNumber, Stop } from "../../../../../../types/Stop";
import {
  iconTextSizeValues,
  LineNumberIconProps,
} from "../../../../../../types/props/LineNumberIconProps";
import {
  HorizontalBarProps,
  PaddingTypeValues,
} from "../../../../../../types/props/HorizontalBarProps";

const FONT_VALUE = CONSTANTS.FONT_VALUES.TEXT;
const PADDING_AROUND = CONSTANTS.PADDING_GLOBAL.SIDES;

const StopCard: React.FC<StopCardProps> = (props: Stop) => {
  const [heightSize, setHeightSize] = useState(RFValue(FONT_VALUE));
  const stop = props;
  const stopName = stop.libelle;
  const linesAvailable = stop.ligne; // array

  /* avoid unused stops */
  if (linesAvailable.length === 0) return null;

  let lineNumberCardsToBeRendered = linesAvailable.map(
    (line: LineNumber, index: number) => {
      const _props: LineNumberIconProps = {
        lineNumber: line.numLigne,
        isRatio1by1: false,
        iconTextSize: iconTextSizeValues.small,
        iconMaxHeight: heightSize, // keep ratio
      };
      // keep ratio for 1-2-letter lineNumbers
      if (line.numLigne.length < 3) {
        _props.iconMaxWidth = heightSize;
      }
      return <LineNumberIcon key={index} {..._props}></LineNumberIcon>;
    }
  );

  const callBackTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      let _textHeight: number = e.nativeEvent.lines[0].height;
      return setHeightSize(_textHeight);
    },
    []
  );

  const _paddingTypeProp: HorizontalBarProps = {
    paddingType: PaddingTypeValues.paddingBottom,
  };
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
      <HorizontalBar {..._paddingTypeProp}></HorizontalBar>
    </View>
  );
};
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

export default StopCard;
