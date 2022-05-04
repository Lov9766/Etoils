import React, { useState, useEffect } from "react";
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Entypo from "react-native-vector-icons/Entypo";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import AntDesign from "react-native-vector-icons/AntDesign";
// import Fontisto from "react-native-vector-icons/Fontisto";
// import Checkbox from "@mui/material/Checkbox";
import { db } from "../db/dbconfig";
import { collection } from "firebase/firestore";

import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

function Singing({ navigation }) {
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
        <Text style={{ fontSize: 30, marginTop: 35 }}>Singing</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 17 }}>Please Fill the form below</Text>
      </View>
      <View style={{ paddingTop: 10, paddingLeft: 60, paddingRight: 50 }}>
        <View style={{ borderBottomWidth: 1, color: "gray", paddingTop: 10 }}>
          {/* <FontAwesome5 name="user-tie" size={20} /> */}
          <TextInput placeholder="Full Name" style={{ fontSize: 20 }} />
        </View>

        <View
          style={{
            paddingTop: 10,
          }}
        >
          {/* <Entypo name="cake" size={20} /> */}
          <TextInput
            placeholder="Date of Birth"
            style={{
              fontSize: 20,
              borderBottomWidth: 1,
              marginLeft: 1,
              paddingRight: 1,
            }}
          />
          {/* <FontAwesome5 name="user-tie" size={20} /> */}
        </View>
        <View style={{ paddingTop: 10 }}>
          <TextInput
            placeholder="Age"
            style={{
              fontSize: 20,
              borderBottomWidth: 1,
              // marginLeft: 60,
              paddingRight: 0,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
          }}
        >
          {/* <MaterialCommunityIcons name="gender-male-female" size={20} /> */}
          <TextInput
            placeholder="Gender"
            style={{
              fontSize: 20,
              borderBottomWidth: 1,
              marginLeft: 1,
              paddingRight: 195,
            }}
          />
          {/* <MaterialCommunityIcons name="human-male-height" size={20} /> */}
        </View>

        {/* <View>
          <TextInput
            placeholder="Height"
            style={{
              fontSize: 20,
              paddingLeft: 0,
              borderBottomWidth: 1,
              paddingTop: 10,
            }}
          />
        </View> */}

        <View
          style={{
            borderBottomWidth: 1,
            paddingTop: 10,
          }}
        >
          {/* <MaterialIcons name="location-pin" size={20} /> */}
          <TextInput placeholder="Current Location" style={{ fontSize: 20 }} />
        </View>

        <View
          style={{
            paddingTop: 10,
            borderBottomWidth: 1,
            paMaterialIconsingTop: 15,
          }}
        >
          {/* <AntDesign name="star" size={20} /> */}
          <TextInput placeholder="Experience" style={{ fontSize: 20 }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
          }}
        >
          {/* <AntDesign name="mobile1" size={20} /> */}
          <TextInput
            placeholder="Mobile"
            style={{
              fontSize: 20,
              borderBottomWidth: 1,
              paddingRight: 198,
            }}
          />
          {/* <FontAwesome name="whatsapp" size={20} /> */}
        </View>

        {/* <View style={{ paddingTop: 10 }}>
          <TextInput
            placeholder="Whatsapp"
            style={{
              fontSize: 20,

              borderBottomWidth: 1,
            }}
          />
        </View> */}

        <View
          style={{
            borderBottomWidth: 1,
            paddingTop: 15,
          }}
        >
          {/* <FontAwesome name="language" size={20} /> */}
          <TextInput placeholder="Languages" style={{ fontSize: 20 }} />
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            paddingTop: 10,
          }}
        >
          {/* <MaterialCommunityIcons name="email" size={20} /> */}
          <TextInput placeholder="Email" style={{ fontSize: 20 }} />
        </View>

        {/* <View style={{ paddingTop: 10 }}>
          
          <TextInput
            placeholder="Passport(Y/N)"
            style={{
              fontSize: 20,
              borderBottomWidth: 1,
              color: "black",
            }}
          />
        </View> */}

        <View
          style={{
            borderBottomWidth: 1,
            paddingTop: 10,
          }}
        >
          
          <TextInput
            placeholder="Driving Licence(Y/N)"
            style={{
              fontSize: 20,
              color: "black",
              
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 15, color: "gray", marginBottom: 80 }}>
            Select the vehicles
          </Text>
          {/* <Checkbox {...label} defaultChecked /> */}
        </View>
      </View>
    </View>
  );
}
export default Singing;
