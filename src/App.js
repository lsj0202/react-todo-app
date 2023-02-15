import React, {useState} from 'react';
import './App.css';

export default function App () {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius : "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (completed) => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");


  //--------------- 버튼으로 클릭한 것을 제외한 결과값을 출력하게 해줌  ---------------------------------------------------

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => (data.id !== id));
    console.log('newTodoData',newTodoData);
    setTodoData(newTodoData);
  }
  
  //-------------- 해야할 일을 입력할때 event 속성을 이용하여 값을 전달시켜주는 역할을 한다. -------------------------------

  const handleChange = (e) => {
    console.log('e',e.target.value);
    setValue(e.target.value);
  }

  //-------------- 전달 받은 값을 화면에 출력하고 입력칸을 비우는 역할을 해준다 -------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id : Date.now(), //현재의 Date를 나열 해 준다.
      title: value,
      completed: false,
    };

    setTodoData(prev => [...prev, newTodo]);
    setValue("");
    console.log('title', newTodo.title);
  }

  //------------- completed를 바꿔주기 위해서 현재있는 데이터와 반대로 넣어주는 역할을 해준다. ------------------------------

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }

  //--------------------------------------------------------------------------------------------------------------------

  return(
    <div className='container'>
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>
        <form style={{display: 'flex'}} onSubmit={handleSubmit}>
          <input type="text" name="value" style={{ flex:'10', padding: '8px'}} placeholder="해야 할 일을 입력하세요." value={value} onChange={handleChange}/>
          <input type="submit" value="입력" className='btn' style={{flex:'1'}}></input>
        </form>

      {todoData.map(data => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}/>
            {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
        </div>
      ))}
      </div>
    </div>
  )
}