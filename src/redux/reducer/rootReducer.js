import {combineReducers} from "redux";
import todoListAction from "../action/todoListAction";



export const rootReducer = combineReducers({
    todos:todoListAction

})