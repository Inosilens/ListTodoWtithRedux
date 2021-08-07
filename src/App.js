import "./App.css"
import {useDispatch, useSelector} from "react-redux";
import {actionChangeComplete, actionGetInput, actionRemoveTodo, actionTodoAdd} from "./redux/action/todoListAction";


function App() {
    const dispath = useDispatch()
    const todoList = useSelector(state=>state.todos.todos)
    const inputValue = useSelector(state=>state.todos.inputValue)
    const complete = useSelector(state=>state.todos)

    const changeInput = (e) =>{
        e.preventDefault()
        dispath(actionGetInput(e.target.value))

    }
    const addTodo = (e) => {
        e.preventDefault()
        let todo = {name : inputValue, id : Date.now(), complete:false}
        dispath(actionTodoAdd(todo))
        dispath(actionGetInput(""))
    }
    const deleteTodos =(todos) => {
       dispath(actionRemoveTodo(todos.id))

    }
    const changeComplete = (e) => {
        dispath((actionChangeComplete(e.id)))

    }

  return (
    <div className="App container d-flex flex-column align-items-center justify-content-center">
        <div className="app__header">
        <input type="text" className=" app_input" value={inputValue} onChange={changeInput}/>
        <button disabled={!inputValue} className="btn btn-secondary" type=" button" onClick={addTodo}>Add todo</button>
        </div>
        <div className=" pt-3 d-flex flex-column  justify-content-between">
            {todoList.map((item,index)=>
                <ul key={index} className=" todo__container d-flex flex-row align-items-center justify-content-between">
                <li className={item.complete ?"complete":""} onClick={()=>changeComplete(item)} >{item.name}</li>
                    <div>
                <button  className="btn btn-danger" onClick={()=>deleteTodos(item)}>Delete</button>
                    </div>
                </ul>) }
        </div>

    </div>
  );
}

export default App;
