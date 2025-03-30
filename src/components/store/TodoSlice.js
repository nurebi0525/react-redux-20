import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload.text,
                completed: false, 
            });
        },
        toggleComplate: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed; 
            }
        },
        deletetodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        allDeleteTodo: (state) => {
            state.todos = [];
        },
    }
});

export const { addTodo, toggleComplate, deletetodo, allDeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
