import Todo from "./Todo";
import {Provider} from "react-redux";
import {store} from "./app/store";
import AddForm from "./AddForm";

function App() {

  return (
    <>
    <Provider store={store}>
      <AddForm></AddForm>
      <Todo></Todo>
    </Provider>
       
    </>
  )
}

export default App
