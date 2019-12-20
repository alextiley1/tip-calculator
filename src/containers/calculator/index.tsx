import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { Button, Input, Slider, Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const Calculator: React.FC = () => {
  const [answer, setAnswer] = React.useState("0");
  const [splitAnswer, setSplitAnswer] = React.useState("0");
  return (
    <Formik
      initialValues={{ bill: 0, tip: 15, split: 1 }}
      onSubmit={({ bill, tip, split }) => {
        const calcAnswer = Math.round(Number(bill) * (tip / 100 + 1));
        const calcSplitAnswer = Math.round(calcAnswer / split);
        setAnswer(String(calcSplitAnswer * split));
        setSplitAnswer(String(calcSplitAnswer));
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
              width: 300,
              borderRadius: 20,
              backgroundColor: "#ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
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
              textContentType="telephoneNumber"
              keyboardType={"numeric"}
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
            <Text
              style={{
                fontSize: 13,
                paddingTop: 30,
                alignSelf: "center",
                color: "#004286"
              }}
            >
              Split:{" "}
              <Text
                style={{
                  fontSize: 13,
                  paddingTop: 30,
                  alignSelf: "center",
                  color: "#0055AD"
                }}
              >
                {values.split}
              </Text>
            </Text>
            <Slider
              value={values.split}
              onValueChange={e => setFieldValue("split", e)}
              animationType="spring"
              maximumValue={8}
              minimumValue={1}
              step={1}
              thumbTintColor="#3396FC"
              style={{ width: 200, paddingBottom: 30, alignSelf: "center" }}
            />
            <Button
              style={{
                alignSelf: "center",
                backgroundColor: "red",
                width: 220
              }}
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
            {values.split > 1 && splitAnswer !== "0" ? (
              <Animatable.Text
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                  fontSize: 15,
                  paddingTop: 30,
                  alignSelf: "center",
                  color: "#004286",
                  textAlign: "center"
                }}
              >
                Each: R{splitAnswer}
              </Animatable.Text>
            ) : null}
          </Card>
        </View>
      )}
    </Formik>
  );
};

export default Calculator;
