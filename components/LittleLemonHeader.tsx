import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LittleLemonHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 0.2,
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 18,
    color: '#495E57',
    fontWeight: 'bold'
  }
})

export default LittleLemonHeader
