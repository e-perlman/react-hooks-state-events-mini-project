import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks]=useState(TASKS)
  const[selectedCategory,setSelectedCategory]=useState('All')
  
  function handleCategory(category){
    setSelectedCategory(category)
  }
  function handleFormSubmit(newTask){
    const updatedTasks=[...tasks,newTask]
    setTasks(updatedTasks)
  }
  function removeTask(id){
    const udpatedTasks=tasks.filter(task=>task.text!==id)
    setTasks(udpatedTasks)
  }
  console.log(tasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryList={CATEGORIES} onCategoryClick={handleCategory}/>
      <NewTaskForm categoryList={CATEGORIES} onTaskFormSubmit={handleFormSubmit}/>
      <TaskList tasks={tasks} onDelete={removeTask} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
