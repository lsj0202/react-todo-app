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

//클래스형 주석

// import React, {Component} from 'react';
// import './App.css';

// export default class App extends Component {
// 	getStyle = (completed) => {
// 		return {
// 			padding: '10px',
// 			borderBottom: '1px #ccc dotted',
// 			textDecoration: completed ? 'line-through' : 'none',
// 			paddingBottom: '15px',
// 		};
// 	};

// 	state = {
// 		todoData : [],
// 		value : ''
// 	}

// 	handleCompleteChange = (id) => {
// 		let newTodoData = this.state.todoData.map((data) => {
// 			if(data.id === id){
// 				data.completed = !data.completed;
// 			}
// 			return data;
// 		});

// 		this.setState({ todoData : newTodoData });
// 	}

// 	handleChange = (e) => {
// 		this.setState({value : e.target.value});
// 	}

// 	handleClick = (id) => {
// 		let newTodoData = this.state.todoData.filter(data => data.id !== id);
// 		console.log(newTodoData);
// 		this.setState({todoData: newTodoData});
// 	}

// 	handleOnClick = (e) => {
// 		e.preventDefault();

// 		let newTodo = {
// 			id : Date.now(),
// 			title : this.state.value,
// 			completed : false,
// 		}

// 		this.setState({todoData: [...this.state.todoData, newTodo], value: ''});
// 	}
// 	render(){
// 		return(
// 				<div className='container'>
// 					<div className='todoBlock'>
// 						<div className='title'>
// 							<h1>할 일 목록</h1>
// 						</div>

// 						<form className='inputForm'>
// 							<input className='doit' type='text' placeholder='해야 할 일을 입력하세요' value={this.state.value} onChange={this.handleChange}/>
// 							<input onClick={this.handleOnClick} type='submit' value='입력' className='btn'/>
// 						</form>
						
// 						{this.state.todoData.map((data) => (
// 							<div style={this.getStyle(data.completed)} key={data.id}>
// 								<input type='checkbox' defaultChecked={data.completed} onChange={() => this.handleCompleteChange(data.id)}/>
// 									{data.title}
// 								<button className='btnStyle' onClick={() => this.handleClick(data.id)}>x</button>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 		  )
// 	}
// }