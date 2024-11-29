import LoginScreen from '@/components/LoginScreen'
import MenuItems from '@/components/MenuItemsToDisplay'
import { View, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  }
})
