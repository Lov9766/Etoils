import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
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
        <FontAwesome name="car" size={20} />
        <TextInput
          placeholder="Driving Licence(Y/N)"
          style={{
            fontSize: 20,
            color: "black",
            marginRight: 90,
          }}
        />
      </View>
      <View style={{ borderBottomWidth: 1, color: "gray" }}>
        <FontAwesome5 name="user-tie" size={20} />
        <TextInput
          placeholder="Name on card"
          style={{ paddingLeft: 25, marginRight: 100, fontSize: 20 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 15,
        }}
      >
        <AntDesign name="mobile1" size={20} />
        <TextInput
          placeholder="Mobile"
          style={{
            fontSize: 20,
            borderBottomWidth: 1,
            paddingRight: 100,
          }}
        />
        <FontAwesome name="whatsapp" size={20} />
        <TextInput
          placeholder="Whatsapp"
          style={{
            fontSize: 20,

            borderBottomWidth: 1,
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
      <Image
        style={{width:50,height:50,marginBottom:40}}
        source={require("./google-pay.png")}
      />
    </View>
  );
}
export default Payment;
