import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Etoils from "./component/Etoils";
import Hello from "./component/Hello";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Page from "./component/Page";
// import Modeling from "./component/Modeling";
import Modeling from "./component/Singing";
import Payment from "./component/Payment";
import Admin from "./component/Admin";
import Singing from "./component/Singing";
// import Writing from "./component/Writing";

export default function App() {
  const Stacks = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stacks.Navigator>
        {/* <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        > */}
        {/* <Etoils></Etoils> */}
        {/* <Hello></Hello> */}
        {/* <Login></Login> */}
        {/* <Signup /> */}
        {/* <Text style={{ fontSize: 80 }}>Stack</Text> */}
        {/* <Page /> */}
        {/* <Modeling/> */}
        {/* <Payment/> */}
        {/* <Admin /> */}
        {/* </View> */}
        {/* <Singing/> */}
        {/* <Stacks.Screen name="Etoils" component={Etoils} />
        <Stacks.Screen name="Login" component={Login} />
        <Stacks.Screen name="Signup" component={Signup} /> */}
        <Stacks.Screen name="Hello" component={Hello} />
        <Stacks.Screen name="Modeling" component={Modeling} />
        <Stacks.Screen name="Singing" component={Singing} />
        {/* <Stacks.Screen name="Writing" component={Writing} /> */}
      </Stacks.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
