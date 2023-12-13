import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Skcrin1 from './Skcrin1'
import Skcrin2 from './Skcrin2'
import Skcrin3 from './Skcrin3'


const Bottom = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="skrins1" component={Skcrin1}   options={{headerShown:false}}/>
      <Bottom.Screen name="skrins3" component={Skcrin3} options={{headerShown:false}}/>
      <Bottom.Screen name="skrins2" component={Skcrin2} options={{headerShown:false}}/>
    </Bottom.Navigator>
  )
}

export default BottomNavigator