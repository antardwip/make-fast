import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from './Main';
import One from './One';


const Drawer = createDrawerNavigator();


const DrawerNavigater = () => {
  return (
    
      <Drawer.Navigator>
        <Drawer.Screen name='MTV' component={Main} options={{headerShown:false }}/>
        <Drawer.Screen name="One" component={One} options={{headerShown:false}}/>
      </Drawer.Navigator>
  )
}

export default DrawerNavigater