import React, { useState ,useEffect} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { auth } from "../db/dbconfig";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
function Login({navigation}) {
  const [loginemail, setLoginEmail] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged(
      users => {
        if(users){
          console.log(users)
          navigation.navigate("Modeling");
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
  const logout = async () => {};
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
          style={{ width: 200, height: 200, marginTop: 30 }}
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
        <TextInput
          placeholder={"Email"}
          onChangeText={(Text) => setLoginEmail(Text)}
          style={{
            fontSize: 20,
            paddingLeft: 30,
            height: 48,
            width: "90%",
            borderWidth: 1,
            borderRadius: 25,
          }}
        />

        <TextInput 
          placeholder={"Password"}
           secureTextEntry={true}
          onChangeText={(Text) => setLoginPassword(Text)}
          style={{
            fontSize: 20,
            paddingLeft: 30,
            height: 48,
            width: "90%",
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 25,
           
          }}
        />
      </View>
      <TouchableOpacity
        onPress={
          login
        }
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
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {}}>
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
