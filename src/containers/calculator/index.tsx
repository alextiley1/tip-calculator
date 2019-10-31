import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import styled from "styled-components/native";
import { color, ColorProps } from "styled-system";
import { Formik } from "formik";

const AppContainer = styled.View<ColorProps>`
  ${color};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Calculator: React.FC = () => {
  const [answer, setAnswer] = React.useState("");
  return (
    <Formik
      initialValues={{ bill: 0, tip: 15 }}
      onSubmit={({ bill, tip }) => {
        const calcAnswer = Math.round(Number(bill) * (tip / 100 + 1));
        setAnswer(String(calcAnswer));
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <AppContainer>
          <View>
            <TextInput
              onChangeText={handleChange("bill")}
              onBlur={handleBlur("bill")}
              placeholder="Bill"
            />
            <TextInput
              onChangeText={handleChange("tip")}
              onBlur={handleBlur("tip")}
              placeholder="Tip"
            />
            <Button type="submit" onPress={handleSubmit} title="Submit" />
          </View>
          <Text>{answer}</Text>
        </AppContainer>
      )}
    </Formik>
  );
};

export default Calculator;
