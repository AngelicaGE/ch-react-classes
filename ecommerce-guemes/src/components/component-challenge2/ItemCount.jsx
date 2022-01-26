import React, {useState} from 'react';
import '../../styles/ItemCount.css'

const ItemCount = ({name, maxAvailable, initial}) => {
    const [clicks, setClicks] = useState(initial);
    const [lastClickTime, setLastClickTime] = useState(null);
    const itemsAvailable = maxAvailable;
  
    const addItem = () => {
      var now = new Date();
      setClicks(clicks + 1);
      setLastClickTime(now.toString().split('GMT')[0]);
    };

    const removeItem = () => {
      var now = new Date();
      setClicks(clicks - 1);
      setLastClickTime(now.toString().split('GMT')[0]);
    };
  
    return (
      <>
        <div className='ItemCount'>
          <h1>{name}</h1>
          <h5>{itemsAvailable} disponibles</h5>
          
          <div className='click-container'>
            <div>
              <button type='button' onClick={removeItem} disabled={clicks <= 0}>-</button>
            </div>
            <div>
              {clicks}
            </div>
            <div>
              <button type='button' onClick={addItem} disabled={clicks >= itemsAvailable}>+</button>
            </div>
          </div>
          <button type='submit' onClick={()=> {alert('thanks for ordering!')}} className={(clicks <= 0)? 'disabled': 'enabled'} disabled={clicks <= 0}>Order now</button>
          <p>Order updated at: {lastClickTime}</p>
        </div>
      </>
    );
  };
  
export default ItemCount;
