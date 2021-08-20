import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NativeBaseProvider } from 'native-base';
import LoginScreen from './Screens/LoginScreen'
import SignUpScreen from './Screens/SignUpScreen'

export default function App() {
  return (
    <NativeBaseProvider>
    {/* // <View style={styles.container}> */}
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <SignUpScreen/>
      {/* <StatusBar style="auto" /> */}
    {/* // </View> */}
    </NativeBaseProvider>
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
