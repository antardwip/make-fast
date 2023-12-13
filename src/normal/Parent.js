import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigater from '../sideNave/DrawerNavigater'
import BottomNavigator from '../bottomNavigator/BottomNavigator'

const Parent = () => {
  return (
    <View style={{ flex:1 , margin:30}}>
      <DrawerNavigater/>
      
    </View>
  )
}

export default Parent