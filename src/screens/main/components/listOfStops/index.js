import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CONSTANTS from "../constants";
import StopCard from "./components/stopCard";
import { ApiHelper } from "../../../../api/helper";

const paddingValue = CONSTANTS.PADDING_GLOBAL.SIDES;

export default function ListOfStops() {
  const [allStops, setAllStops] = useState([]);

  const apiHelper = new ApiHelper();
  const MAX_NUMBER_STOPS = 10;
  const getStops = async () =>
    apiHelper
      .getAllStops()
      //.then((res) => setAllStops(res.slice(0, MAX_NUMBER_STOPS))) // for dev purposes
      .then((res) => setAllStops(res))
      .catch((err) => console.error(err))
      .finally();

  useEffect(() => {
    getStops().then((r) => r);
  }, []);

  // for Array.map
  function buildStopCard(stop_obj, index) {
    const commonProps = {
      stop: stop_obj,
    };
    return <StopCard key={index} {...commonProps}></StopCard>;
  }

  let stopsToBeRendered = allStops.map((stop_obj, i) =>
    buildStopCard(stop_obj, i)
  );

  return <View style={styles.container}>{stopsToBeRendered}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingValue,
  },
});
