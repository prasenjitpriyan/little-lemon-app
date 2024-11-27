import LittleLemonHeader from '@/components/LittleLemonHeader'
import { Stack } from 'expo-router'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function Layout() {
  return (
    <View style={styles.container}>
      {/* StatusBar for proper alignment */}
      <StatusBar barStyle="light-content" backgroundColor="#F4CE14" />

      {/* Header */}
      <LittleLemonHeader />

      <View style={styles.content}>
        <Stack
          screenOptions={{
            headerShown: false // Disable default header
          }}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Little Lemon</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4'
  },
  content: {
    flex: 1
  },
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
