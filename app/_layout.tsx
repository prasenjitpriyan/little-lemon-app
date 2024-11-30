import { Slot } from 'expo-router'
import { View, StyleSheet, StatusBar, useColorScheme } from 'react-native'

export default function Layout() {
  const colorScheme = useColorScheme()

  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' }
      ]}
    >
      {/* StatusBar for proper alignment */}
      <StatusBar barStyle="light-content" backgroundColor="#F4CE14" />

      {/* Header */}

      <View style={styles.content}>
        <Slot />
      </View>

      {/* Footer */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1
  }
})
