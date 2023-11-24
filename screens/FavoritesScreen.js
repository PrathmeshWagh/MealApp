import { Text, View, StyleSheet } from "react-native";
import { MEALS } from '../data/dummy-data'
import MealList from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";


function FavoritesScreen() {

  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={StyleSheet.rootContainer}>
        <Text style={styles.text}>You Have No Favorite Meals Yet..</Text>
      </View>
    )
  }

  return <MealList items={favoriteMeals} />
}

export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  text: {
    margin: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
})