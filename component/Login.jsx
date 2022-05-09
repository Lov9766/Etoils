import React, { useState, useEffect } from "react";
import {AsyncStorage} from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import { auth } from "../db/dbconfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
function Login({navigation}) {
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const storeData = async () => {
  try {
    await AsyncStorage.setItem("@storage_Key", loginemail);
    setLoginEmail; ("");
  } catch (e) {
    // saving error
  }
  }
  storeData();
  useEffect(() => {
    auth.onAuthStateChanged(
      users => {
        if(users){
          console.log(users)
          // navigation.navigate("");
        }
       }
    )
  
    return () => {
      
    }
  }, [])
  

  const login = async () => {
    console.log(loginemail, loginpassword);
    // navigation.navigate('Login')
    try {
      // console.log(auth);
      const users = await signInWithEmailAndPassword(
        auth,
        loginemail,
        loginpassword
      );
      alert("login succesfully");
      // console.log(login);
       console.log(loginemail, loginpassword);
    } catch (err) {
      console.log(err.message);
    }
  };
  const logout = async () => { };
  
  return (
    <View
      style={{
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
        sign in to continue
      </Text>

      <View>
        <Image
          style={{ width: 100, height: 100, marginTop: 30 }}
          source={require("./contect.webp")}
        />
      </View>

      <View
        style={{
          width: 350,
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
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
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Entypo
            name="user"
            size={40}
            style={{ backgroundColor: "yellow", borderRadius: 60 }}
          />

          <TextInput
            placeholder={"Email"}
            onChangeText={(Text) => setLoginEmail(Text)}
            style={{
              fontSize: 20,
              paddingLeft: 30,
              height: 48,
              
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
        {/* <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          onChangeText={(Text) => setLoginPassword(Text)}
          style={{
            fontSize: 20,
            paddingLeft: 30,
            
          }}
          /> */}
          </View>
      </View>
      <TouchableOpacity onPress={login}>
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
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
