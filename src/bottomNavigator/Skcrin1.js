import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Skcrin1 = ({navigation}) => {
  const imageUrl = 'https://www.revv.co.in/blogs/wp-content/uploads/2020/05/ISKCON-Temple-Mayapur.jpg';
  const handleButtonPress = () => {
    navigation.openDrawer()  
    // alert('You have been clicked me')
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text >Skcrin
         image
      </Text>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Press me</Text>
        </TouchableOpacity>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
       <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
       <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
       <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
       <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
       <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  image: {
    width: 200,
    height: 200,
     // Adjust the resizeMode as needed (cover, contain, stretch, etc.)
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Skcrin1