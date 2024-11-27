import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const menuItemsToDisplay = [
  'Hummus',
  'Moutabal',
  'Falafel',
  'Marinated Olives',
  'Kofta',
  'Eggplant Salad',
  'Lentil Burger',
  'Smoked Salmon',
  'Kofta Burger',
  'Turkish Kebab',
  'Fries',
  'Buttered Rice',
  'Bread Sticks',
  'Pita Pocket',
  'Lentil Soup',
  'Greek Salad',
  'Rice Pilaf',
  'Baklava',
  'Tartufo',
  'Tiramisu',
  'Panna Cotta'
]

const MenuItems = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>View Menu</Text>
        {menuItemsToDisplay.map((item, index) => (
          <Text key={index} style={styles.menuItem}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  scrollContent: {
    paddingHorizontal: 40,
    paddingVertical: 40
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginBottom: 20
  },
  menuItem: {
    color: '#F4CE14',
    fontSize: 24,
    marginBottom: 10
  }
})

export default MenuItems
