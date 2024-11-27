import { View, Text, StyleSheet, Image } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.description}>
        Little Lemon is your go-to place for fresh Mediterranean cuisine. Enjoy
        our signature dishes and great service!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#495E57'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F4CE14',
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    color: '#F4CE14',
    textAlign: 'center',
    lineHeight: 22
  }
})
