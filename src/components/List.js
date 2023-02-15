import React from 'react'

function List({todoData, setTodoData}) {

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

	const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })
    setTodoData(newTodoData);
  }

	const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => (data.id !== id));
    console.log('newTodoData',newTodoData);
    setTodoData(newTodoData);
  }
  

  return (
    <div>
			{todoData.map(data => (
				<div style={getStyle(data.completed)} key={data.id}>
					<input type="checkbox" defaultChecked={false} onChange={() => handleCompleteChange(data.id)}/>
						{data.title}
					<button 
						style={btnStyle} 
						onClick={() => handleClick(data.id)}
					>x
					</button>
				</div>
			))}
    </div>
  );
}

export default List;