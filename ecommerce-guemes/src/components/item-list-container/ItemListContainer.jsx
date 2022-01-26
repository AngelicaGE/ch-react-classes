import React, {useState} from 'react';
import '../../styles/ItemListContainer.css';
import ItemCount from '../component-challenge2/ItemCount';

const items = [
    {id: "1", name:"Camisa Polo", maxAvailable:5, initial:1},
    {id: "2", name:"Camisa Polo", maxAvailable:7, initial:1}
]

const ItemListContainer = () => {
    // my state
    const [selectedItem, setSelectedItem] = useState(null);

    const otherFunction = () =>{
        console.log("Other function");
    }

  return (
      <div className='ItemListContainer'>
        <h2>LISTA DE PRODUTOS</h2>
        {
            items.map(({id, name, maxAvailable, initial}) => (
                <>
                    <ItemCount className="item-count" key={id} 
                        name={name} 
                        maxAvailable={maxAvailable}
                        initial={initial}
                    ></ItemCount>
                    <hr />
                </>
            
            ))
        }
      </div>
  );
};

export default ItemListContainer;
