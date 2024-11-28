# ScrollView 👋

This material focuses on building a scrollable list in React Native using the ScrollView component, which is essential for displaying content that exceeds the mobile screen size.

```tsx
import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'

const menuItems = [
  'Pizza',
  'Burger',
  'Pasta',
  'Salad',
  'Sushi',
  'Tacos',
  'Steak',
  'Soup',
  'Sandwich',
  'Fries',
  'Dessert',
  'Drinks'
]

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Little Lemon Menu</Text>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false} // Hides the vertical scrollbar
        bounces={true} // Enables bounce effect
      >
        {menuItems.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  scrollView: {
    backgroundColor: '#fff',
    borderRadius: 5
  },
  contentContainer: {
    padding: 10
  },
  menuItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 5
  },
  menuText: {
    fontSize: 16,
    color: '#333'
  }
})

export default App
```

1. Understanding ScrollView: The ScrollView component allows users to scroll up and down to view all menu items in the Little Lemon app, accommodating the limited screen space of mobile devices.
   It must be bounded by a height, which can be achieved by setting a height on the parent View component or using the flex property.

2. Implementing ScrollView in React Native: To create a scrollable menu, you need to import the ScrollView component and wrap it inside a View component with a defined height or flex 1. The ScrollView can contain Text components that display the menu items, and you can customize its appearance using props like style for padding and background color.

3. Enhancing User Experience: The ScrollView component comes with an inbuilt touch responder system, allowing users to scroll smoothly on both iOS and Android devices. There are many customization options available for the ScrollView, enabling you to tailor it to your app's specific needs.

# FlatList 👋

```tsx
import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' }
]

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>List Header</Text>}
        ListFooterComponent={<Text style={styles.footer}>List Footer</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8'
  },
  itemContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5
  },
  itemText: {
    fontSize: 16,
    color: '#333'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
    color: '#666'
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd'
  }
})

export default App
```

1. Understanding the Flat List Component: The flat list component is designed to efficiently display scrollable lists in React Native apps, especially when dealing with large datasets. Unlike the Scroll View component, which renders all items at once, the flat list only renders items that are about to appear on the screen, improving rendering times.

2. Benefits of Lazy Rendering: Lazy rendering means that items are rendered only when they are needed, which significantly speeds up the performance of the app. As the user scrolls, the flat list removes items that are no longer visible and renders new items, ensuring a smooth user experience.

3. Key Syntax and Props: The flat list component requires two main props: data (the array of items) and renderItem (a function to render each item). Additional optional props can be used to customize the list further, such as defining headers, footers, and separators.
