import React from 'react'
import { View, StyleSheet } from 'react-native'
import Welcome from '@/components/ImageComponent'

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Render Welcome Component */}
      <Welcome />
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
