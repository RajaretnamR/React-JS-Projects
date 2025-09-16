import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
  const { id } = useParams(); // 1. URL la irundha id capture
  const [food, setFood] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        // Find food with clicked id
        const selectedFood = data.recipes.find((recipe) => recipe.id === parseInt(id));
        setFood(selectedFood);
      } catch (error) {
        console.log("Error fetching food details");
      }
    };

    fetchFood();
  }, [id]);

  if (!food) {
    return <p className="text-center mt-10">Loading…</p>;
  }

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
      <img src={food.image} alt={food.name} className="w-full max-w-md mx-auto mb-4" />
      <p className="text-gray-700 mb-2">⏱️ Cook Time: {food.cookTimeMinutes} mins</p>
      <p className="text-gray-700 mb-2">⭐ Rating: {food.rating}</p>
      <p className="text-gray-700 mb-2">📝 Ingredients: {food.ingredients.join(", ")}</p>
      <p className="text-gray-700 mb-2">🍴 Servings: {food.servings}</p>
      <p className="text-gray-700 mb-2">👨‍🍳 Instructions: {food.instructions}</p>
    </div>
  );
};

export default FoodDetails;
