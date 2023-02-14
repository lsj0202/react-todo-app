import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius : "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    }
  }

  state = {
    todoData : [
      {
        id: '1',
        title: '공부하기',
        completed: true
      },
      {
        id: '2',
        title: '청소하기',
        completed: false
      }
    ],
    value: "", //값 보관 공간
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => (data.id !== id));
    console.log('newTodoData',newTodoData);
    this.setState({todoData : newTodoData}); //state는 함수형 컴포넌트를 사용 할 수 없다.
  }
  
  handleChange = (e) => {
    console.log('e',e.target.value);
    this.setState({ value : e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id : Date.now(), //현재의 Date를 나열 해 준다.
      title: this.state.value,
      completed: false,
    };

    this.setState({todoData: [...this.state.todoData, newTodo]}); //연개 연산자
  }

  render(){
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
          <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
            <input type="text" name="value" style={{ flex:'10', padding: '8px'}} placeholder="해야 할 일을 입력하세요." value={this.state.value} onChange={this.handleChange}/>
            <input type="submit" value="입력" className='btn' style={{flex:'1'}}></input>
          </form>

        {this.state.todoData.map(data => (
          <div style={this.getStyle()} key={data.id}>
            <input type="checkbox" defaultChecked={false}/>
              {data.title}
            <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
          </div>
        ))}
        </div>
      </div>
    )
  }
}