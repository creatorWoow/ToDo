import {mainStore} from "./redux/store";
import {AddInputContainer} from "./containers/AddInputContainer";
import {TodoListContainer} from "./containers/TodoListContainer";
import {Footer} from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <button onClick={() => console.log(mainStore.getState())}>Show Store</button>
      <TodoListContainer/>
      <AddInputContainer/>
      <Footer/>
    </div>
  );
}

export default App;
