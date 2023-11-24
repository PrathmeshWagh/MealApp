import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealList from '../components/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) { // here route is come from reactnavigation
  const categId = route.params.categoryId   //We Use Destructuring 
  // categId Is Category Which We Press c1 to c10


  const displayedMeals = MEALS.filter((mealsItem) => {
    return mealsItem.categoryIds.indexOf(categId) >= 0;
  });  // It Contain All Data From MEALS File Of Perticular Category Which We Select

  // Setting Title Dynamically
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categId).title
    // category.id is get using found method which we apply on CATEGORIES
    // categ.id is which is selected from All Categories Screen

    navigation.setOptions({
      title: categoryTitle
    })
  }, [categId, navigation]) // This are Dependecies When It Change useLayoutEffect Work

  return <MealList items={displayedMeals} />

}
export default MealsOverviewScreen;

