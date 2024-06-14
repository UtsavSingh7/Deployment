import React from 'react';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const Me = () => {
  const addToCartHandler = (itemNum) => {
    // Your logic for adding item to cart
    console.log(`Item ${itemNum} added to cart.`);
  };

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard itemNum={1} burgerSrc={burger1} price={200} title="Cheese Burger" handler={addToCartHandler} />
        <MenuCard itemNum={2} burgerSrc={burger2} price={300} title="Veggie Burger" handler={addToCartHandler} />
        <MenuCard itemNum={3} burgerSrc={burger3} price={400} title="Chicken Burger" handler={addToCartHandler} />
      </div>
    </section>
  );
};

export default Me;
