import FlatLists from '@/components/FlatList'
import MenuItems from '@/components/MenuItems'
import WelcomeScreen from '@/components/WelcomeScreen'
import { View, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatLists />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  }
})
