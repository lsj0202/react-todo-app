import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

const initialTodoData = localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : [];

export default function App () {
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");


	const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id : Date.now(), //현재의 Date를 나열 해 준다.
      title: value,
      completed: false,
    };

    if(value === ""){
      alert('해야할 일을 입력하세요');
    } else{
      setTodoData(prev => [...prev, newTodo]);
      localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    }
    
    setValue("");
    console.log('title', newTodo.title);
  }

  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));
  };

  return(
    <div className="flex items-center justify-center w-srceen h-screen bg-blue-200">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <List todoData = {todoData} setTodoData = {setTodoData}/>
        <Form value = {value} setValue = {setValue} handleSubmit ={handleSubmit}/>
      </div>
    </div>
  )
}