import React from 'react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions
} from 'react-native'

const WelcomeScreen: React.FC = () => {
  const window = useWindowDimensions()

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
        />
        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      {/* Description Section */}
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <Text style={styles.regularText}>Window Dimensions</Text>
      <Text style={styles.regularText}>Height: {window.height}</Text>
      <Text style={styles.regularText}>Width: {window.width}</Text>
      <Text style={styles.regularText}>Font scale: {window.fontScale}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%'
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Center items vertically
    margin: 10
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center'
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20
  }
})

export default WelcomeScreen
