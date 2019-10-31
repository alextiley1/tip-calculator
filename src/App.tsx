import React from "react";
import { ThemeProvider } from "styled-components/native";
import { Calculator } from "./containers";

const theme = {
  colors: {
    text: "#000",
    backgroundColor: "#fff",
    success: "#0f0",
    error: "#f00"
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme.colors}>
      <Calculator />
    </ThemeProvider>
  );
}
