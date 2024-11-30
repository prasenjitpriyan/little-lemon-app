import React from 'react'
import { Stack } from 'expo-router'
import { StyleSheet, StatusBar, useColorScheme, View } from 'react-native'

const Layout: React.FC = () => {
  const colorScheme = useColorScheme() // Determines if the theme is light or dark

  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' }
      ]}
    >
      {/* Set StatusBar style dynamically based on the system's color scheme */}
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor="#F4CE14"
      />

      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Welcome',
            headerStyle: { backgroundColor: '#F4CE14' }, // Set header background color
            headerTintColor: '#fff' // Set header text color
          }}
        />
        <Stack.Screen
          name="subscribe"
          options={{
            title: 'Subscribe',
            headerStyle: { backgroundColor: '#333333' }, // Darker theme for this screen
            headerTintColor: '#fff'
          }}
        />
      </Stack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white' // Default background color
  }
})

export default Layout
