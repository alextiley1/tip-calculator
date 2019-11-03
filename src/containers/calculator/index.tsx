import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { Button, Input, Slider, Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const Calculator: React.FC = () => {
  const [answer, setAnswer] = React.useState("0");
  return (
    <Formik
      initialValues={{ bill: 0, tip: 15 }}
      onSubmit={({ bill, tip }) => {
        const calcAnswer = Math.round(Number(bill) * (tip / 100 + 1));
        setAnswer(String(calcAnswer));
      }}
    >
      {({ handleChange, handleSubmit, values, setFieldValue }) => (
        <View
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flex: 2,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Card
            containerStyle={{
              width: 250,
              borderRadius: 20,
              backgroundColor: "#ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              shadowRadius: 10,
              shadowColor: "#000",
              shadowOpacity: 40,
              shadowOffset: { width: 100, height: 10 }
            }}
          >
            <Text
              style={{ fontSize: 13, alignSelf: "center", color: "#004286" }}
            >
              Bill Amount
            </Text>
            <Input
              onChangeText={handleChange("bill")}
              leftIcon={<Text>R</Text>}
              inputContainerStyle={{ width: 200, alignSelf: "center" }}
            />
            <Text
              style={{
                fontSize: 13,
                paddingTop: 30,
                alignSelf: "center",
                color: "#004286"
              }}
            >
              Tip Amount:{" "}
              <Text
                style={{
                  fontSize: 13,
                  paddingTop: 30,
                  alignSelf: "center",
                  color: "#0055AD"
                }}
              >
                {values.tip}
              </Text>{" "}
              %
            </Text>
            <Slider
              value={values.tip}
              onValueChange={e => setFieldValue("tip", e)}
              animationType="spring"
              maximumValue={25}
              minimumValue={10}
              step={5}
              thumbTintColor="#3396FC"
              style={{ width: 200, paddingBottom: 30, alignSelf: "center" }}
            />
            <Button
              style={{ paddingTop: 30, alignSelf: "center" }}
              raised
              type="solid"
              onPress={handleSubmit}
              title="Calculate"
            />
            <Text
              style={{
                fontSize: 30,
                paddingTop: 30,
                alignSelf: "center",
                color: "#004286"
              }}
            >
              Total to Pay
            </Text>
            <Animatable.Text
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={{
                fontSize: 30,
                paddingTop: 30,
                alignSelf: "center",
                color: "#004286",
                textAlign: "center"
              }}
            >
              R{answer}
            </Animatable.Text>
          </Card>
        </View>
      )}
    </Formik>
  );
};

export default Calculator;
