import React from "react";
import Task from'./Task';

function TaskList({tasks,selectedCategory,onDelete}) {
  const filteredTasks=tasks.filter(task=>{
    if(selectedCategory==='All')return true;
    return selectedCategory===task.category
  })

  return (
    <div className="tasks">
      {filteredTasks.map((task)=>(
       <Task 
        key={task.text} 
        text={task.text}
        category={task.category}
        onDeleteTask={onDelete}
        /> 
      ))}
    </div>
  );
}

export default TaskList;
