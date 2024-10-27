import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './styles.css';




const OABItems = [
  { name: "Katsu Hake",ingredients: "Panko crumb with house katsu sauce", type: "", notes: "PICK A RICE BOWL & PAIR IT WITH A SOFT DRINK FOR 12.50" },
  { name: "Katsu Chicken",ingredients: "Panko crumb with house katsu sauce", type: "", notes: "PICK A RICE BOWL & PAIR IT WITH A SOFT DRINK FOR 12.50" },
  { name: "Korean Fried Chicken",ingredients:"Korean spiced coating, house pickled cucumber, carrot and mooli, teriyaki sauce", type: "", notes: "PICK A RICE BOWL & PAIR IT WITH A SOFT DRINK FOR 12.50" },
  { name: "Crispy Pork Belly",ingredients: "Salt & pepper coating, house pickled cucumber, carrot and mooli, teriyaki sauce", type: "", notes: "PICK A RICE BOWL & PAIR IT WITH A SOFT DRINK FOR 12.50" },
  { name: "Bang Bang Cauliflower",ingredients: "Tempura batter, nice ‘n’ spicy glaze, house pickled cucumber, carrot & mooli",type: "Plant Based", notes: "PICK A RICE BOWL & PAIR IT WITH A SOFT DRINK FOR 12.50" },
  { name: "Spiced Sweet Potato",ingredients: "Gochujang glaze, pickled watermelon & cucumber, spring onion, sriracha mayo" , type: "Plant Based", notes: "PICK A RICE BOWL & PAIR IT WITH A SOFT DRINK FOR 12.50" },
  { name: "Sticky Hoisin Duck", ingredients: "House pickled cucumber, crispy noodles, hoisin sauce", type: "", notes: "PICK A RICE BOWL & PAIR IT WITH A SOFT DRINK FOR 12.50" },

];

const OABcard = ({ name, ingredients, type, notes, onPrev, onNext }) => (
  <div className="OABcard">
    <button className="nav-button left" onClick={onPrev}>&#9664;</button>
    <div className="OABcard-content">
      <h2>{name}</h2>
      <p>{ingredients}</p>
      {type && <p className="type">{type}</p>}
      {notes && <p className="notes">{notes}</p>}
    </div>
    <button className="nav-button right" onClick={onNext}>&#9654;</button>
  </div>
);

const OABTraining = () => {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIndex((prevIndex) => (prevIndex + 1) % OABItems.length),
    onSwipedRight: () => setIndex((prevIndex) => (prevIndex - 1 + OABItems.length) % OABItems.length),
  });

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % OABItems.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + OABItems.length) % OABItems.length);
  };

  return (
    <div className="OAB-training" {...handlers}>
  
      <div className="OABcard-container">
        <OABcard {...OABItems[index]} onPrev={handlePrev} onNext={handleNext} />
      </div>
    </div>
  );
};

export default OABTraining;