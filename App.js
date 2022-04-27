import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Etoils from './component/Etoils';
import Hello from './component/Hello';
import Login from './component/Login';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Etoils></Etoils> */}
      {/* <Hello></Hello> */}
      <Login></Login>
      <Text style={{ fontSize: 80 }}>Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
