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

  getStyle = (completed) => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    }
  }

  //---------------- state를 통해 todoList의 값을 저장하는 공간 ----------------------------------------------------------
  
  state = {
    todoData : [],
    value: "", //값 보관 공간
  }

  //--------------- 버튼으로 클릭한 것을 제외한 결과값을 출력하게 해줌  ---------------------------------------------------

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => (data.id !== id));
    console.log('newTodoData',newTodoData);
    this.setState({todoData : newTodoData}); //state는 함수형 컴포넌트를 사용 할 수 없다.
  }
  
  //-------------- 해야할 일을 입력할때 event 속성을 이용하여 값을 전달시켜주는 역할을 한다. -------------------------------

  handleChange = (e) => {
    console.log('e',e.target.value);
    this.setState({ value : e.target.value });
  }

  //-------------- 전달 받은 값을 화면에 출력하고 입력칸을 비우는 역할을 해준다 -------------------------------------------

  handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id : Date.now(), //현재의 Date를 나열 해 준다.
      title: this.state.value,
      completed: false,
    };

    this.setState({todoData: [...this.state.todoData, newTodo], value:""}); //전개 연산자
    console.log('title', newTodo.title);
  }

  //------------- completed를 바꿔주기 위해서 현재있는 데이터와 반대로 넣어주는 역할을 해준다. ------------------------------

  handleCompleteChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    this.setState({todoData: newTodoData});
  }

  //--------------------------------------------------------------------------------------------------------------------

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
          <div style={this.getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={false} onChange={() => this.handleCompleteChange(data.id)}/>
              {data.title}
            <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
          </div>
        ))}
        </div>
      </div>
    )
  }
}