import React,{useState} from "react";

function NewTaskForm({categoryList,onTaskFormSubmit}) {
  const categoryOptions=categoryList.filter(category=>category!=='All')
  const [formData,setFormData]=useState({
    text:'',
    category:'Code'
  })
  function handleChange(event){
    const name=event.target.name
    let value=event.target.value
    setFormData({
      ...formData,
      [name]:value
    })
  }
  function handleSubmit(event){
    event.preventDefault()
    const newTask={
      text:formData.text,
      category:formData.category
    }
    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categoryOptions.map(category=>(
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
