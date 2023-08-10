import React ,{useState,useEffect}from "react";
import { AiOutlineDelete,AiOutlineHome,AiOutlineFileAdd} from "react-icons/ai";
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import ShowTodo from "./ShowTodo";


const getDataFromLS=()=>{
  const data=localStorage.getItem('todos')
  if(data){
    return JSON.parse(data);
  }
  else{
    return [];
  }
}

const AddTodo = () => {


  const [todos,setTodos]=useState(getDataFromLS());
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [time,setTime] = useState('')
// Form Submit Event
  const handleAddTodoSubmit=(e)=>{
    e.preventDefault();
//Creating an object
    let todo={
      title,
      desc,
      time
    }
    setTodos([...todos,todo]);
    setTitle('');
    setDesc('');
    setTime('');
  }

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  

  return (
    <>
    <div className="container-fluid Addtodo-Page">
      <h1 className="text-center">Add a new Task </h1>
      <div className="add-section">
        <form className="form-group" onSubmit={handleAddTodoSubmit}>
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title of your task"
            required
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Briefly describe your task "
            onChange={(e)=>setDesc(e.target.value)}
            value={desc}
            />
          <label for="party">Date and Time</label>
          <input className="form-control" type="time" onChange={(e)=>setTime(e.currentTarget.value)}
            min='00:00'
            max='23:59'
            step='60'
            value={time} />

          <button className="btn btn-warning add"><AiOutlineFileAdd/> </button>
        </form>
        
        <Link to={"/"}>
          <button
            className="btn btn-dark show"
            style={{ width: "100%", marginTop: "20px", padding: "10px" }}
            >
            Go to <AiOutlineHome/> page
          </button>
        </Link>
      </div>
    </div>
    
    <ShowTodo todos={todos} setTodos={setTodos}/>
    
    </>
    
    
  );
};

export default AddTodo;
