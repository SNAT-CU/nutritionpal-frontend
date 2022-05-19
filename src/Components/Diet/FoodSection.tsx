import React, { useState } from 'react';
import './FoodSection.css';
import ModalSearch from '../Search/ModalSearch';
import { useSelector } from 'react-redux';

function FoodSection({ section }:any) {

  const [searchModal, setSearchModal] = useState(false);

  const foodState = useSelector((state:any) => state.foods);

  return (
    <div>
      <h2 className="section-title">{section}</h2>
      {foodState[section].map((food: any) => (
        <div className="food-item" key={food.food_name}>
          <div className="food-item-name">{food.food_name}</div>
          <div className="food-item-calories">{food.food_description}</div>
        </div>
      ))}
      <button onClick={()=> {
        setSearchModal(true);
      }} className="section-add-btn" type="button">
        Add Food
        {searchModal && (
          <ModalSearch
            searchModal={searchModal}
            setSearchModal={setSearchModal}
            section={section}
          />
        )}
      </button>
    </div>
  );
}

export default FoodSection;
