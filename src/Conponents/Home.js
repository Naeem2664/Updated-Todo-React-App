import React from 'react'
import { Link,NavLink} from "react-router-dom";
import { AiOutlineFileAdd} from "react-icons/ai";

const Home = () => {
  return (
    <div className="homepage">
        <div className="col home">
            <div className="greetings">
                <h1 className='text-center' >Welcome back fellaz...</h1>
            </div>
            <div className="link-btn">
            <div className="add-todo-btn">
                <NavLink to={'/addtodo'}><button className='btn btn-warning add'><AiOutlineFileAdd/>New Task</button></NavLink>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home