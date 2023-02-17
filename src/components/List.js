import React from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function List({todoData, setTodoData}) {

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
      <DragDropContext>
        <Droppable droppableId="todo-s">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable key={data.id} index = {index} draggableId = {data.id.toString()}>

                  {(provided, snapshot) => (
                    <div key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                      <div className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
                        <div className="items-center">
                        <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)}/>{" "}
                          <span className={data.completed ? "line-through" : undefined }>{data.title}</span>
                          </div>
                          <div className="items-center">
                            <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}> x </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
          {provided.placeholder}
          </div>
        )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default List;


