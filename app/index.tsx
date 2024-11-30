import React from 'react'
import { View, StyleSheet } from 'react-native'
import WelcomeScreen from '@/components/WelcomeScreen'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
