import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import './styles.css'; 



const FItems = [

{   menu: "BREAKFAST/BRUNCH",
    name:"MAPLE BACON PANCAKES",
     price:"£12",
    ingredients:"Pancakes, smoked bacon, fried eggs, maple syrup",
    type:"",
     notes:""
 },
 {  menu: "BREAKFAST/BRUNCH",
    name:"BEANS & PARMESAN ON TOAST",
     price:"£9.50",
    ingredients:"Baked beans with fresh parmesan on buttered sourdough toast",
    type:"",
     notes:""
 },
 { menu: "BREAKFAST/BRUNCH",
    name:"SMASHED POTATOES & SUNNY EGGS",
     price:"£10.50",
    ingredients:"Crispy smashed potatoes, fried eggs, cherry tomatoes, spinach, green sauce, pickled red onions",
    type:"",
     notes:""
 },
 { menu: "BREAKFAST/BRUNCH",
    name:"MAPLE BACON PANCAKES",
     price:"£12",
    ingredients:"Pancakes, smoked bacon, fried eggs, maple syrup",
    type:"Plant Based Option Available", 
     notes:""
 },
  { menu: "BREAKFAST/BRUNCH",
    name:"BREAKFAST BURRITO",
     price:"£11",
    ingredients:"Eggs, smoked bacon, cheese, crispy mini hash browns & Rubies in the rubble* ketchup",
    type:"", 
     notes:"*Sustainably made using surplus fruit & veg"
 },
  { menu: "BREAKFAST/BRUNCH",
    name:"CHICKEN & WAFFLES",
     price:"£12",
    ingredients:"Maple glazed fried chicken, pineapple, toasted waffles",
    type:"Plant Based Goujons Available", 
     notes:""
 },

 { menu: "BREAKFAST/BRUNCH",
    name:"THE FULL FLEXIMIST",
     price:"£13",
    ingredients:"Spinach, 2 eggs, tomato, hashbrown bites,halloumi, baked beans, mushroom, buttered sourdough toast",
    type:"Veg", 
     notes:""
 },

 { menu: "BREAKFAST/BRUNCH",
    name:"CHICKEN & WAFFLES",
     price:"£12",
    ingredients:"Maple glazed fried chicken, pineapple, toasted waffles",
    type:"Plant Based Goujons Available", 
     notes:""
 },

 { menu: "BREAKFAST/BRUNCH",
    name:"CHICKEN & WAFFLES",
    price:"£12",
    ingredients:"Maple glazed fried chicken, pineapple, toasted waffles",
    type:"Plant Based Goujons Available", 
     notes:""
 },

 { menu: "BREAKFAST/BRUNCH",
    name:"CHICKEN & WAFFLES",
    price:"£12",
    ingredients:"Maple glazed fried chicken, pineapple, toasted waffles",
    type:"Plant Based Goujons Available", 
     notes:""
 },

  { menu: "BREAKFAST/BRUNCH",
    name:"CHICKEN & WAFFLES",
     price:"£12",
    ingredients:"Maple glazed fried chicken, pineapple, toasted waffles",
    type:"Plant Based Goujons Available", 
     notes:""
 },

  { menu: "BREAKFAST/BRUNCH",
    name:"CHICKEN & WAFFLES",
     price:"£12",
    ingredients:"Maple glazed fried chicken, pineapple, toasted waffles",
    type:"Plant Based Goujons Available", 
     notes:""
 },
]

const Fcard = ({ menu, name, price, ingredients, type, notes, onPrev, onNext }) => (
  <div className="Fcard">
    <button className="nav-button left" onClick={onPrev}>&#9664;</button>
    <div className="Fcard-content">
        <h2>{menu}</h2>
      <h2>{name}</h2>
        <p>{price}</p>
      <p>{ingredients}</p>
      {type && <p className="type">{type}</p>}
      {notes && <p className="notes">{notes}</p>}
    </div>
    <button className="nav-button right" onClick={onNext}>&#9654;</button>
  </div>
);

const FoodTraining = () => {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prevIndex) => (prevIndex + 1) % FItems.length),
    onSwipedRight: () => setIndex((prevIndex) => (prevIndex - 1 + FItems.length) % FItems.length),
  });

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % FItems.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + FItems.length) % FItems.length);
  };

  return (
    <div className="F-training" {...handlers}>
  
      <div className="Fcard-container">
        <Fcard {...FItems[index]} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default FoodTraining;