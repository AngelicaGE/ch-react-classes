import { useEffect, useState } from 'react';
import './App.css';
import ResizeComponent from './components/resize-component/ResizeComponent';

import ItemListContainer from './components/item-list-container/ItemListContainer';
import {task, productsAPI} from './helpers/promises'
const age = 18;

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const names = ["angie", "andy", "jaime"];

  return (
    <div className="App">
      <ResizeComponent></ResizeComponent>
    </div>
  );
}

export default App;
