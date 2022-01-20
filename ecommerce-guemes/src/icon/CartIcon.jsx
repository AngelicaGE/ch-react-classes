// THIS IS A STATELESS COMPONENT
import React from 'react';
import cart from './bag.png'
import "./CartIcon.css"

const CartIcon = () => {
  return (
      <div className='CartIcon'>
          <img src={cart}/>
      </div>
  );
};

export default CartIcon;
