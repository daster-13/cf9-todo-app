import {useState} from "react";
import type {Todo} from "../types.ts"


export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (text: string) => {
        setTodos((prev) =>
            [...prev,
                {id: Date.now(), text: text,completed:false}]);

    }
    //State todos
    // [
    //     {id: Date.now(), text:'', completed:false},
    //     {id: Date.now(), text:'', completed:true},
    //
    // ]

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id)
        )
    }

    const editTodo = (id: number, newText:string) => {
        setTodos(prev => prev.map( todo =>
        todo.id === id ? {...todo, text: newText}: todo))
    }
    const toggleTodo = (id: number) => {
        setTodos(prev => prev.map( todo =>
            todo.id === id ? {...todo, completes:!todo.completed}: todo))
    }
    const clearAllTodos = () => {
        setTodos([])
    }
    return {
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        toggleTodo,
        clearAllTodos,


    }

}