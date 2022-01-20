import React, {useState} from 'react';
import Item from '../item/Item';

const items = [
    {id: "1", name: "iPhoneX",price: "1000", createdBy: "a"},
    {id: "2", name: "Samsung",price: "300", createdBy: "a"},
    {id: "3", name: "Huawei",price: "1400", createdBy: "a"},
    {id: "4", name: "Galaxi",price: "100", createdBy: "a"}

]

const ItemListContainer = () => {
    // my state
    const [selectedItem, setSelectedItem] = useState(null);

    const otherFunction = () =>{
        console.log("Other function");
    }

  return (
      <div>
        <h2>LISTA DE PRODUTOS</h2>
        <h3>producto seleccionado: </h3>
        <p>{selectedItem ? selectedItem.name : 'Ninguno'}</p>
        {//OPTION 1
            /*items.map(item => (
                //<Item key={item.id} item={item}></Item>
                <Item key={item.id} id={item.id} {...item} setSelectedItem={setSelectedItem} otherFunction={otherFunction}></Item>
            ))*/}

        {
            //OPTION 2
            items.map(({id, name, price}) => (
                <Item key={id} 
                    id={id} 
                    name={name} 
                    price={price}
                    setSelectedItem={setSelectedItem}
                    otherFunction={otherFunction}
                ></Item>
            ))
        }
      </div>
  );
};

export default ItemListContainer;
