import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './styles.css';

const appetiserItems = [
  { name: "Salt & Pepper Edamame Beans", price: "£5", type: "Plant Based" },
  { name: "Piquanté peppers", price: "£5", type: "Vegetarian" },
  { name: "Chorizo & Cheddar Doughballs", price: "£6" },
  { name: "Salt ’N’ Shake Potatoes", price: "£8", type: "Plant Based ", notes: "Smashed potatoes, malt vinegar, salt, house garlic sauce" },
  { name: "Nice ’N’ Spicy Fried Chicken", price: "£9", notes: "Plain Buttermilk - £8.50" },
  { name: "Panko Halloumi", price: "£8.25", type: "Vegetarian" },
  { name: "Churros", price: "£8.50", type: "Vegetarian" },
  { name: "Coffee & Chocolates", price: "£7", type: "Vegetarian" },
  { name: "Tempura Prawn Lollipops", price: "£8.50" },
  { name: "Loaded Truffle Tater Tots", price: "£6.25", notes: "Shaved parmesan, truffle oil, garlic mayo" },
  { name: "Cubana Pork Bon Bons", price: "£8", notes: "Cuban spiced pulled pork, pickled red onion, apple sauce" },
  { name: "Crispy Shrooms", price: "£8", type: "Plant Based" },     
  { name: "Pork Crackling", price: "£5" },
  { name: "Salt & Pepper Fries", price: "£5.75", type: "Plant Based" },   
  { name: "Onion Rings", price: "£5", type: "Plant Based" },  
  { name: "House Fries", price: "£4.75", type: "Plant Based" },
  { name: "Next Level Chocolate Brownie", price: "£8", type: "Plant Based Available", notes: "Vanilla gelato, miso caramel, chocolate, togarashi snap" },

];

const Acard = ({ name, price, type, notes, onPrev, onNext }) => (
  <div className="Acard">
    <button className="nav-button left" onClick={onPrev}>&#9664;</button>
    <div className="Acard-content">
      <h2>{name}</h2>
      <p>{price}</p>
      {type && <p className="type">{type}</p>}
      {notes && <p className="notes">{notes}</p>}
    </div>
    <button className="nav-button right" onClick={onNext}>&#9654;</button>
  </div>
);

const AppetiserTraining = () => {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prevIndex) => (prevIndex + 1) % appetiserItems.length),
    onSwipedRight: () => setIndex((prevIndex) => (prevIndex - 1 + appetiserItems.length) % appetiserItems.length),
  });

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % appetiserItems.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + appetiserItems.length) % appetiserItems.length);
  };

  return (
    <div className="appetiser-training" {...handlers}>
  
      <div className="Acard-container">
        <Acard {...appetiserItems[index]} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default AppetiserTraining;