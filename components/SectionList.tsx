import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  SectionListRenderItemInfo,
  SectionListData
} from 'react-native'

// Correctly type sections
interface Section {
  title: string
  data: string[]
}

const menuItemsToDisplay: Section[] = [
  {
    title: 'Appetizers',
    data: [
      'Hummus',
      'Moutabal',
      'Falafel',
      'Marinated Olives',
      'Kofta',
      'Eggplant Salad'
    ]
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab']
  },
  {
    title: 'Sides',
    data: [
      'Fries',
      'Buttered Rice',
      'Bread Sticks',
      'Pita Pocket',
      'Lentil Soup',
      'Greek Salad',
      'Rice Pilaf'
    ]
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta']
  }
]

const Item: React.FC<{ name: string }> = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
)

const Separator: React.FC = () => <View style={menuStyles.separator} />

const SectionLists: React.FC = () => {
  const renderItem = ({ item }: SectionListRenderItemInfo<string>) => (
    <Item name={item} />
  )

  const renderSectionHeader = ({
    section
  }: {
    section: SectionListData<string>
  }) => <Text style={menuStyles.sectionHeader}>{section.title}</Text>

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
      />
    </View>
  )
}

// Add styles to the component
const menuStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333333'
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center'
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 32
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE'
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center'
  }
})

export default SectionLists
