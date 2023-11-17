import './App.css';
import Alert from './Molecula/alert/Alert';
import ApiPrueba from './Molecula/async/ApiPrueba';
import FormDate from './Molecula/form/form';
import ToDoList from './Molecula/toDoList/ToDoList';

function App() {
  return (
    <div className="w-full m-0 p-0">
      <FormDate />
      <ApiPrueba />
      <ToDoList />
      <Alert message='ejemplo'/>
    </div>
  );
}

export default App;
