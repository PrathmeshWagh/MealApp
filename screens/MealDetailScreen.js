import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List.js';
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';


function MealDetailScreen({ route, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids); // We Get All Manage Favorite id by Redux Into favoriteMealsIds component

  const dispatch = useDispatch();


  const mealId = route.params.mealId // We Destruct From mealId Of MealItem Page and We Make That Prop
  // mealId Content Which MealPress That Meal Id Get Into mealId
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);



  const mealIsFavorite = favoriteMealIds.includes(mealId) //if mealid present then mealIsFavorite 

  function headerButtonPressHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }))
    } else {
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onConfirm={headerButtonPressHandler} />
      }
    })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  outerContainer: {
    alignItems: 'center', // It Is Parent For ListContainer
  },

  listContainer: {
    width: '80%'
  }

})