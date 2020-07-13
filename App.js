import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home'





const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Séries inc." component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
