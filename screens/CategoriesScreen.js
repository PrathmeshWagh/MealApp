import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



//This Function Resposible For Rendering Each Item In List


function CategoriesScreen({ navigation }) {
  // This navigation Props Given By ReactNative It Has Method Which Navigate Screeen

  function renderCategoryItem(itemData) {

    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id
      });  // This Navigate Method Provide By ReactNavigation On Navigation Props
    } // We Go On MealsOverview Page After Btn Press

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen;