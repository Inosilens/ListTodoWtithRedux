

const ADD_TODO = "ADD_TODO"
const REMOVE_TODO="REMOVE_TODO"
const GET_INPUT_VALUE="GET_INPUT_VALUE"
const TODOS_COMPLETE ="TODOS_COMPLETE"

const defaultState = {
    todos:[],
    inputValue:""}

export default function todoListAction (state = defaultState,action){

    switch (action.type){
        case ADD_TODO : return {...state,todos:[...state.todos,action.payload]}
        case REMOVE_TODO : return {...state, todos: state.todos.filter(item=> item.id !==action.payload)}
        case GET_INPUT_VALUE : return {...state,inputValue: action.payload}
        case TODOS_COMPLETE : return {...state,complete:[...state.todos,]}




        default : return state
    }
}

export const actionTodoAdd = (payload) => ({type: ADD_TODO, payload})
export const actionRemoveTodo = (payload) =>({type: REMOVE_TODO, payload})
export const  actionGetInput = (payload) => ({type: GET_INPUT_VALUE, payload})
export const actionChangeComplete = (payload)=> ({type: TODOS_COMPLETE, payload})