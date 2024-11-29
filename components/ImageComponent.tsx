import React from 'react'
import { ScrollView, Image, StyleSheet, Text } from 'react-native'

const Welcome: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Logo Image */}
      <Image
        style={styles.logo}
        source={require('../assets/images/littleLemonLogo.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
      />

      {/* Title Text */}
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>

      {/* Gallery Images */}
      <Image
        style={styles.image}
        source={require('../assets/images/Picture1.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel="Little Lemon Dish 1"
      />
      <Image
        style={styles.image}
        source={require('../assets/images/Picture2.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel="Little Lemon Dish 2"
      />
      <Image
        style={styles.image}
        source={require('../assets/images/Picture3.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel="Little Lemon Dish 3"
      />
      <Image
        style={styles.image}
        source={require('../assets/images/Picture4.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel="Little Lemon Dish 4"
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  logo: {
    height: 100,
    width: 300,
    alignSelf: 'center'
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center'
  }
})

export default Welcome
