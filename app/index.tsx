import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoginScreen from '@/components/LoginScreen'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
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
