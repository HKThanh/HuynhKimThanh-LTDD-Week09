import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/counterSlice";
import todoAppSlice from "./redux/todoAppSlice";

export const store = configureStore({
    reducer: {
        todoApp: todoAppSlice,
        counter: counterSlice,
    },
});