// THIS IS A STATELESS COMPONENT
import React from 'react';

const Item = ({id, name, price, setSelectedItem, otherFunction}) => {
    const selectItem = () => setSelectedItem({name, price, id});

  return (
      <>
    <div> 
        {name} a solo ${price}
        <button onClick={selectItem}>Seleccionar producto</button>
        <button onClick={otherFunction}>Imprimir en consola</button>
        <hr />
    </div>
    </>
    );
};

export default Item;
