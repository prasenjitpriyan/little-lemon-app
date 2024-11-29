import React from 'react'
import { View, StyleSheet } from 'react-native'
import BackgroundImageApp from '@/components/BackgroundImageApp'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <BackgroundImageApp />
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
