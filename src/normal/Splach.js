import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Splach = ({navigation}) => {

      useEffect(() => { 
            setTimeout(() => {
              navigation.navigate('Parent')
            }, 2000)
            }, [])            
  return (
    <View>
      <Text>Splach</Text>
    </View>
  )
}

export default Splach