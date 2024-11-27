import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LittleLemonFooter = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Little Lemon</Text>
    </View>
  )
}

export default LittleLemonFooter

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    color: '#495E57'
  }
})