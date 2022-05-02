import React, { useState, useEffect } from "react";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import AntDesign from "react-native-vector-icons/AntDesign";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function Payment() {
  return (
    <View
      style={{
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 60,
          color: "black",
        }}
      >
        Make
      </Text>
      <Text
        style={{
          fontSize: 60,
          color: "black",
        }}
      >
        Payment{" "}
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 30,
        }}
      >
        {/* <FontAwesome name="car" size={20} /> */}
        <TextInput
          placeholder="Driving Licence(Y/N)"
          style={{
            fontSize: 20,
            color: "black",
            marginRight: 90,
          }}
        />
      </View>
      <View style={{ borderBottomWidth: 1, color: "gray", paddingTop: 20 }}>
        {/* <FontAwesome5 name="user-tie" size={20} /> */}
        <TextInput
          placeholder="Name on card"
          style={{ marginRight: 135, fontSize: 20 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 15,
        }}
      >
        {/* <AntDesign name="mobile1" size={20} /> */}
        <TextInput
          placeholder="Expiry Date"
          style={{
            fontSize: 20,
            borderBottomWidth: 1,
            paddingRight: 160,
          }}
        />

        {/* <FontAwesome name="whatsapp" size={20} style={{ marginRight: 5 }} /> */}
      </View>

      <View style={{}}>
        <TextInput
          placeholder="CVV"
          style={{
            fontSize: 20,
            borderBottomWidth: 1,
            paddingRight: 210,
            paddingTop: 10,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log("Click here");
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 60,
            paddingVertical: 7,
            elevation: 5,
            marginTop: 60,
            backgroundColor: "yellow",
            color: "black",
            borderRadius: 40,
          }}
        >
          Pay
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 40, paddingTop: 15 }}>or</Text>
      <View>
        <Text style={{ fontSize: 20, paddingTop: 15 }}>Pay using Gpay</Text>
      </View>
      <View style={{paddingTop:20}}>
        <Image
          style={{ width: 50, height: 50, marginBottom: 40 }}
          source={require("./google-pay.png")}
        />
      </View>
    </View>
  );
}
export default Payment;
