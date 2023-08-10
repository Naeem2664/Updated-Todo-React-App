import logo from './logo.svg';
import './App.css';
import Home from './Conponents/Home';
import { BrowserRouter as Routers, Routes, Route, Link } from "react-router-dom";
import AddTodo from './Conponents/AddTodo';
import ShowTodo from './Conponents/ShowTodo.js';
function App() {

  const pull_data=(data)=>{
    console.log(data)

  }
  return (
    <Routers>
    <div className="app">
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/addtodo' element={<AddTodo pull_data={pull_data}/>} />
          <Route path='/showtodo' element={<ShowTodo pull_data={pull_data}/>} />
       </Routes>

    </div>
    </Routers>
  );
}

export default App;
