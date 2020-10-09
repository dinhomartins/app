import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { StyleSheet, Text, View } from 'react-native';
import {firebase } from './src/services/firebaseConnection';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar backgroundColor="#0046a8" 
      barStyle="light-content"
      />
      <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
