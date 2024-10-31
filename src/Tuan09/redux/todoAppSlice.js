import { createSlice } from "@reduxjs/toolkit";

export const todoAppSlice = createSlice({
    name: 'todoApp',
    initialState: {
        todo: {
            id: 0,
            title: '',
            completed: false,
        },
        todos: [],
    },

    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.title,
                    };
                }
                return todo;
            });
        }
    },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoAppSlice.actions;

export const selectTodos = (state) => state.todoApp.todos;

export default todoAppSlice.reducer;