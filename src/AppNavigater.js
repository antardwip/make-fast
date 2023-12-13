import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splach from './normal/Splach';
import Parent from './normal/Parent';
const Stack = createStackNavigator();

const AppNavigater = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splach" component={Splach} options={{headerShown:true}}/>
        <Stack.Screen name="Parent" component={Parent}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigater