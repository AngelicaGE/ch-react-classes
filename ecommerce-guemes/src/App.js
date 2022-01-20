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
      <ComponentChildren  otherProp="Un titulo">
        <h1>Hola soy un hijo</h1>
        jejejej
      </ComponentChildren>
      <ClassComponent age={age} name='Angie'></ClassComponent>
      <FunctionComponent age={age}  name='Andrea'></FunctionComponent>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
