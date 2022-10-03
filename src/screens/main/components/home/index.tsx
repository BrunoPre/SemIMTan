import React from "react";
import { Button, View } from "react-native";
import { NSSProps } from "../../../../types/NSSProps";

const Home: React.FC<NSSProps<"Home">> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to LINES screen"
        onPress={() => navigation.navigate("ListOfLines")}
      />
      <Button
        title="Go to STOPS screen"
        onPress={() => navigation.navigate("ListOfStops")}
      />
    </View>
  );
};

export default Home;
