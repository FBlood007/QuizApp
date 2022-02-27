

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import McqText from './McqText'
import HomePage from  './homePage'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen> 
      <Stack.Screen name="McqText" component={McqText}></Stack.Screen> 
   

    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
