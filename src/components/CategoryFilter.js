import React,{useState} from "react";

function CategoryFilter({categoryList,onCategoryClick}) {
  const [selected,setSelected]=useState('')
  
  function handleClick(category){
    setSelected(category)
    onCategoryClick(category)
  }

  const buttonList=categoryList.map((category)=>(
    <button key={category} className={selected===category?'selected':null} onClick={()=>handleClick(category)}>{category}</button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonList}
    </div>
  );
}

export default CategoryFilter;
