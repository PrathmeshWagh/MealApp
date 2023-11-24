import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'

function MealList({ items }) {
  console.log(items)

  function renderMealItem(itemData) {
    const item = itemData.item // We Do Destructuring Here Instead Of Writing ItemData.item we write item only

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    } // instead Of Write Long Line In Return We Create ObjectProps And Pass Into Return
    return (
      <MealItem {...mealItemProps} /> // We Use Spread Operator Here
    ); // Here We Created Another Component Of MealItem
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})