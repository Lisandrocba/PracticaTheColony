import './App.css';
import ApiPrueba from './Molecula/async/ApiPrueba';
import FormDate from './Molecula/form/form';
import ToDoList from './Molecula/toDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <FormDate />
      <ApiPrueba />
      <ToDoList />
      
    </div>
  );
}

export default App;
