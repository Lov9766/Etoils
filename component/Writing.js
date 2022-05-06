import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
// import Checkbox from "@mui/material/Checkbox";
// import { db } from "../db/dbconfig";
// import {collection } from "firebase/firestore"

import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function Writing() {
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // const [checked, setChecked] = React.useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          color: "#fff",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: 0
        }}
      >
        <Text style={{ fontSize: 40, marginTop: 10 }}>Writing</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 17 }}>Please Fill the form below</Text>
      </View>
      <View style={{ paddingTop: 5, paddingLeft: 60, paddingRight: 50 }}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome5 name="user-tie" size={20} />
          <TextInput
            placeholder="Full Name"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="birthday-cake" size={20} />
          <TextInput
            placeholder="Date of Birth"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome5 name="user-tie" size={20} />
          <TextInput
            placeholder="Age"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <MaterialCommunityIcons name="gender-male-female" size={20} />
          <TextInput
            placeholder="Gender"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <MaterialIcons name="location-pin" size={20} />
          <TextInput
            placeholder="Current Location"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <AntDesign name="star" size={20} />
          <TextInput
            placeholder="Experience"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <AntDesign name="mobile1" size={20} />
          <TextInput
            placeholder="Mobile"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="whatsapp" size={20} />
          <TextInput
            placeholder="Whatsapp"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="language" size={20} />
          <TextInput
            placeholder="Language"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <MaterialCommunityIcons name="email" size={20} />
          <TextInput
            placeholder="Email"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <Fontisto name="passport-alt" size={20} />
          <TextInput
            placeholder="Passport(Y/N)"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 1,
            color: "gray",
            paddingTop: 8,
          }}
        >
          <FontAwesome name="car" size={20} />
          <TextInput
            placeholder="Driving Licence(Y/N)"
            style={{ fontSize: 17, paddingLeft: 15 }}
          />
        </View>

        {/* <View>
          <Text
            style={{
              fontSize: 15,
              color: "gray",
              marginBottom: 80,
              paddingLeft: 15,
            }}
          >
            Select the vehicles
          </Text>
          <Checkbox {...label} defaultChecked />
        </View> */}
      </View>
    </View>
  );
}
export default Writing;
