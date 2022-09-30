import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CONSTANTS from "../constants";
import StopCard from "./components/stopCard";
import { ApiHelper } from "../../../../api/helper";
import { EmptyProps } from "../../../../types/props/EmptyProps";
import { Stop } from "../../../../types/Stop";

const paddingValue = CONSTANTS.PADDING_GLOBAL.SIDES;

const ListOfStops: React.FC<EmptyProps> = () => {
  const [allStops, setAllStops] = useState([] as Array<Stop>);

  const apiHelper: ApiHelper = new ApiHelper();
  const MAX_NUMBER_STOPS: number = 10;
  const getStops = async () =>
    apiHelper
      .getAllStops()
      //.then((res) => setAllStops(res.slice(0, MAX_NUMBER_STOPS))) // for dev purposes
      .then((res: Stop[]) => setAllStops(res))
      .catch((err) => console.error(err));

  useEffect(() => {
    getStops().then((r) => r);
  }, []);

  // for Array.map
  function buildStopCard(stop: Stop, index: number): JSX.Element {
    return <StopCard key={index} {...stop}></StopCard>;
  }

  const stopsToBeRendered: Array<JSX.Element> = allStops.map(
    (stop: Stop, index: number) => buildStopCard(stop, index)
  );

  return <View style={styles.container}>{stopsToBeRendered}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingValue,
  },
});

export default ListOfStops;
