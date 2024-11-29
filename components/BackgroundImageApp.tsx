import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const BackgroundImageApp: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/images/logo.png')} // Replace with your image path
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Little Lemon</Text>
        <Text style={styles.subtitle}>Your local Mediterranean Bistro</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Makes the background occupy the entire screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center' // Centers content horizontally
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay
    padding: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10
  }
})

export default BackgroundImageApp
