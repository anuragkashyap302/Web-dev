import {createContext , useContext} from "react";
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed: false,
        }
    ],
    // function ko intilize yaha kar do and deine app.jsx me kar dena
     addTodo: (todo) =>{},
     updateTodo: (id , todo)=> {},
     deleteTodo: (id) =>{},
     toggleComplete: (id) =>{}
});

export const useTodo = () =>{
    return useContext (TodoContext);
}
// ye provider yahi provide kar diye ab main me barr vaar likna nahi padega
export const TodoProvider = TodoContext.Provider
