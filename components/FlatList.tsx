import React from 'react'
import { View, Text, StyleSheet, FlatList, ListRenderItem } from 'react-native'

interface FlatLists {
  name: string
  id: string
}

// Menu items array
const menuItemsToDisplay: FlatLists[] = [
  { name: 'Hummus', id: '1A' },
  { name: 'Moutabal', id: '2B' },
  { name: 'Falafel', id: '3C' },
  { name: 'Marinated Olives', id: '4D' },
  { name: 'Kofta', id: '5E' },
  { name: 'Eggplant Salad', id: '6F' },
  { name: 'Lentil Burger', id: '7G' },
  { name: 'Smoked Salmon', id: '8H' },
  { name: 'Kofta Burger', id: '9I' },
  { name: 'Turkish Kebab', id: '10J' },
  { name: 'Fries', id: '11K' },
  { name: 'Buttered Rice', id: '12L' },
  { name: 'Bread Sticks', id: '13M' },
  { name: 'Pita Pocket', id: '14N' },
  { name: 'Lentil Soup', id: '15O' },
  { name: 'Greek Salad', id: '16Q' },
  { name: 'Rice Pilaf', id: '17R' },
  { name: 'Baklava', id: '18S' },
  { name: 'Tartufo', id: '19T' },
  { name: 'Tartufo', id: '20U' },
  { name: 'Tiramisu', id: '21V' },
  { name: 'Panna Cotta', id: '22W' }
]

// Define the props type for the Item component
interface ItemProps {
  name: string
}

// Item component
const Item: React.FC<ItemProps> = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
)

// Main FlatLists component
const FlatLists: React.FC = () => {
  // Type the renderItem function
  const renderItem: ListRenderItem<FlatLists> = ({ item }) => (
    <Item name={item.name} />
  )

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

// Styles
const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'black'
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36
  }
})

export default FlatLists
