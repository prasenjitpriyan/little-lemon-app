import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
