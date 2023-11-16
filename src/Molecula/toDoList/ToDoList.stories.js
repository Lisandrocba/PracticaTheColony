import ToDoList from "./ToDoList";

export default {
    title: 'ListTask',
    component: ToDoList,
  };

  export const TodoListEmpty = {
    args: {
        arreglo: []
    },
  };
  
  export const TodoListNormal = {
    args: {
        arreglo: ['task1','task2','task3','task4','task5']
    },
  };

  export const LongTodoList = {
    args: {
        arreglo: ['task1','task2','task3','task4','task5','task6','task7','task8','task9','task10','task11','task12','task13','task14','task15','task16','task17','task18','task19','task20']
    },
  };