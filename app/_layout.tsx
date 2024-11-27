import LittleLemonFooter from '@/components/LittleLemonFooter'
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
      <LittleLemonFooter />
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
  }
})
