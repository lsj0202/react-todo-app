import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

export default function App () {
  const [todoData, setTodoData] = useState([]);
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
    }
    
    setValue("");
    console.log('title', newTodo.title);
  }

  return(
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        <Form value = {value} setValue = {setValue} handleSubmit ={handleSubmit}/>
        <List todoData = {todoData} setTodoData = {setTodoData}/>
      </div>
    </div>
  )
}