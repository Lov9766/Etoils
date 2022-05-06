import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/dbconfig";
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";

function SignUp() {
  const [registeremail, setRegisterEmail] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");

  const register = async ({ navigation }) => {
    console.log(registeremail, registerpassword);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registeremail,
        registerpassword
      );
      alert("sign up succesfully");
      navigation.navigate("Login");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <View
      style={{
        marginBottom: 60,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 50,
          color: "black",
        }}
      >
        welcome
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: "black",
        }}
      >
        Register in to continue
      </Text>

      <View>
        <Image
          style={{ width: 100, height: 100, marginTop: 20 }}
          source={require("./contect.webp")}
        />
      </View>

      <View
        style={{
          width: "100%",

          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 1,
            width: 300,
            borderRadius: 25,
            paddingHorizontal: 9,
          }}
        >
          <Entypo
            name="user"
            size={40}
            style={{ backgroundColor: "yellow", borderRadius: 60}}
          />
          <TextInput
            placeholder={"Email"}
            onChangeText={(Text) => setRegisterEmail(Text)}
            style={{
              fontSize: 20,
              paddingLeft: 20,
              height: 40,
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 1,
            width: 300,
            borderRadius: 25,
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Entypo
            name="lock"
            size={40}
            style={{ backgroundColor: "yellow", borderRadius: 60 }}
          />

          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            onChangeText={(Text) => setRegisterPassword(Text)}
            style={{
              fontSize: 20,
              paddingLeft: 25,
              height: 48,
              // width: 300,
              // marginTop: 20,
              // borderWidth: 1,
              // borderRadius: 25,
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderWidth: 1,
            width: 300,
            borderRadius: 25,
            paddingHorizontal: 9,
          }}
        >
          <Entypo
            name="user"
            size={40}
            style={{ backgroundColor: "yellow", borderRadius: 60 }}
          />
          <TextInput
            placeholder={"Conform Password"}
            onChangeText={(Text) => setRegisterEmail(Text)}
            style={{
              fontSize: 20,
              paddingLeft: 30,
              
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          register();
        }}
      >
        <Text
          style={{
            margin: 30,
            elevation: 5,
            paddingHorizontal: 20,
            paddingVertical: 5,
            color: "black",
            backgroundColor: "yellow",
            borderRadius: 40,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 20 }}>or</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Register using</Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 40, height: 40, marginBottom: 40 }}
          source={require("./mail.png")}
        />

        <Image
          style={{ width: 40, height: 40, marginBottom: 90, marginLeft: 30 }}
          source={require("./fb.png")}
        />
      </View>
      {/* <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Text style={{ marginLeft: 40, fontSize: 20 }}>Gamil</Text>
        <Text style={{ marginLeft: 40, fontSize: 20 }}>Facebok</Text>
      </View> */}
    </View>
  );
}

export default SignUp;
