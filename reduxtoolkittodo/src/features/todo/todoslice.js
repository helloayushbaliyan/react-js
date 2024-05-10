import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "hello world"
    }]
};


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        remotodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updatetodo: (state, action) => {
            state.todos = state.todos.map((update) => update.id === action.payload)
        },
    }
})

export const { addtodo, remotodo, updatetodo } = todoSlice.actions

export default todoSlice.reducer


