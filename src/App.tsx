import React from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { ColorProps, color } from "styled-system";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const pkg = require("../package.json");
import { Calculator } from "./containers";
import { Heading } from "./components";

const theme = {
  colors: {
    text: "#000",
    backgroundColor: "#fff",
    success: "#0f0",
    error: "#f00"
  }
};

const AppContainer = styled.View<ColorProps>`
  ${color};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme.colors}>
      <LinearGradient
        colors={["#3396FC", "#004286"]}
        style={{
          display: "flex",
          flex: 1,
          padding: 15,
          alignItems: "center",
          width: "100%",
          height: "100%"
        }}
      >
        <AppContainer>
          <Heading />
          <Calculator />
        </AppContainer>
        <Text>v{pkg.version}</Text>
      </LinearGradient>
    </ThemeProvider>
  );
}
