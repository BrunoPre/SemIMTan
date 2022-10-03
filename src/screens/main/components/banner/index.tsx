import React from "react";
import { BannerProps } from "../../../../types/props/BannerProps";
import HorizontalBar from "../horizontalBar";
import { PaddingTypeValues } from "../../../../types/props/HorizontalBarProps";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import CONSTANTS from "../constants";

const PADDING_BORDER: number = CONSTANTS.PADDING_GLOBAL.BORDER;
const FONT_VALUE: number = CONSTANTS.FONT_VALUES.SUBHEADING;

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <View>
      <HorizontalBar
        paddingType={PaddingTypeValues.paddingBottom}
      ></HorizontalBar>
      <Text style={styles.pageHeading}>{props.bannerTitle}</Text>
      <HorizontalBar
        paddingType={PaddingTypeValues.paddingBottom}
      ></HorizontalBar>
    </View>
  );
};

const styles = StyleSheet.create({
  pageHeading: {
    color: "black",
    fontSize: RFValue(FONT_VALUE),
    fontWeight: "bold",
    paddingTop: PADDING_BORDER,
  },
});

export default Banner;
