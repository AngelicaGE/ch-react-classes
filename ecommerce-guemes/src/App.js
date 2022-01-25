import './App.css';
import { ClassComponent } from './components/class-components/ClassComponent';
import FunctionComponent from './components/function-component/FunctionComponent';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ComponentChildren from './components/component-children/ComponentChildren';
const age = 18;

function App() {
  return (
    <div className="App">
      <h1>Hello world :) </h1>
      <ClassComponent></ClassComponent>
      <FunctionComponent name = "a"></FunctionComponent>
      <FunctionComponent ></FunctionComponent>

    </div>
  );
}

export default App;
