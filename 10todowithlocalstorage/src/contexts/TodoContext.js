import { createContext, useContext } from "react";


export const TodoContext = createContext({
    Todos: [
        {
            id: 1,
            Todo: "Todo msg",
            completed: false
        }
    ],
    AddTodo: (Todo) => { },
    UpdateTodo: (id, Todo) => { },
    DeleteTodo: (id) => { },
    ToggleComplete: (id) => { },
});

export const TodoProvider = TodoContext.Provider

export function UseTodo() {
    return useContext(TodoContext);
}