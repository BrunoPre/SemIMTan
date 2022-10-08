import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { NSSProps } from "../../../../types/NSSProps";
import { stopCardsToBeRendered } from "./utils/ListOfStops.utils";

const ListOfStops: React.FC<NSSProps<"ListOfStops">> = () => {
  return (
    <ScrollView style={styles.container}>{stopCardsToBeRendered()}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListOfStops;
