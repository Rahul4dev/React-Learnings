import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(undefined);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-ordering-app-2c372-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      if (loadedMeals.length > 0) {
        setIsLoading(false);
      }
      setMeals(loadedMeals);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className={styles.mealsError}>
        <img src="/Break-1s-200px.svg" alt="connection error" />
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      {isLoading ? (
        <Loader />
      ) : (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;

const Loader = () => {
  return (
    <div className={styles.mealsLoading}>
      <img src="/Cube-1s-200px.png" alt="loader" />
    </div>
  );
};
