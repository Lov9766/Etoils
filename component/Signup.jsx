import React, {useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth"
import {auth} from "../db/dbconfig";


function SignUp() {
    const [registeremail, setRegisterEmail] = useState("");
    const [registerpassword, setRegisterPassword] = useState("");

    const register = async () => {
      console.log(registeremail, registerpassword);
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registeremail,
          registerpassword
        );
        alert("sign up succesfully");
      } catch (err) {
        console.log(err.message);
      }
    };
  return (
    <View
      style={{
        marginBottom: 250,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
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
        sign in to continue
      </Text>

      <View>
        <Image
          style={{ width: 200, height: 200, marginTop: 20 }}
          source={require("./contect.webp")}
        />
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder={"Email"}
            onChangeText={(Text )=> setRegisterEmail(Text)}
            style={{
              fontSize: 20,
              paddingLeft: 70,
              height: 48,
              width: "70%",
              borderWidth: 1,
              borderRadius: 25,
            }}
          />
        </View>

        <TextInput
          placeholder={"Password"}
          onChangeText={(Text) => setRegisterPassword(Text)}
          style={{
            fontSize: 20,
            paddingLeft: 70,
            height: 48,
            width: "70%",
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 25,
          }}
        />
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
            paddingHorizontal: 40,
            paddingVertical: 7,
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

      <Text style={{ fontSize: 30 }}>or</Text>
      <Text style={{ fontSize: 20 }}>Register using</Text>
    </View>
  );
}

export default SignUp;
