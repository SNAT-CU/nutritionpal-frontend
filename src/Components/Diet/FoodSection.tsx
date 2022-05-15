import React from 'react';
import './FoodSection.css';

function FoodSection({ section }) {
  const mockFoodData = [
    {
      name: 'Chicken',
      calories: '100',
      carbs: '20',
      fat: '10',
      protein: '30',
    },
    {
      name: 'Beef',
      calories: '200',
      carbs: '30',
      fat: '20',
      protein: '40',
    },
    {
      name: 'Pork',
      calories: '300',
      carbs: '40',
      fat: '30',
      protein: '50',
    },
  ];

  return (
    <div>
      <h2 className="section-title">{section}</h2>
      {mockFoodData.map((food) => (
        <div className="food-item" key={food.name}>
          <div className="food-item-name">{food.name}</div>
          <div className="food-item-calories">{food.calories}</div>
        </div>
      ))}
      <button className="section-add-btn" type="button">
        Add Food
      </button>
    </div>
  );
}

export default FoodSection;
