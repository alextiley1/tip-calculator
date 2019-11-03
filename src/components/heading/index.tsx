import React from "react";
import * as Animatable from "react-native-animatable";
import { View } from "react-native";

const Heading: React.FC = () => {
  return (
    <View style={{ paddingTop: 40 }}>
      <Animatable.Text
        animation="bounceInDown"
        style={{
          fontSize: 30,
          fontWeight: "500",
          alignSelf: "center",
          color: "#004286",
          textAlign: "center"
        }}
      >
        TIP CALCULATOR
      </Animatable.Text>
    </View>
  );
};

export default Heading;
