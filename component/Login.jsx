import React from 'react';
import { StyleSheet, Text,TextInput, Image, View, TouchableOpacity } from "react-native";

function Login() {
  return (
    <View
      style={{
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 50,
          color: 'black',
        }}>
        welcome
      </Text>

      <Text
        style={{
          fontSize: 15,
          color: 'black',
        }}>
        sign in to continue
      </Text>

      <View>
        <Image
          style={{width: 200, height: 200, marginTop: 30}}
          source={require('./contect.webp')}
        />
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder={'Email'}
          style={{
            fontSize: 20,
            paddingLeft: 70,
            height: 48,
            width: '70%',
            borderWidth: 1,
            borderRadius: 25,
          }}
        />

        <TextInput
          placeholder={'Password'}
          style={{
            fontSize: 20,
            paddingLeft: 70,
            height: 48,
            width: '70%',
            marginTop: 20,
            borderWidth: 1,
            borderRadius: 25,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('Click here');
        }}>
        <Text
          style={{
            margin: 30,
            elevation: 5,
            paddingHorizontal: 40,
            paddingVertical: 7,
            color: 'black',
            backgroundColor: 'yellow',
            borderRadius: 40,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          console.log('Click here');
        }}>
        <Text
          style={{
            fontSize: 20,
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
    </View>
  );
}


export default Login;