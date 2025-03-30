import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./TodoSlice";
import authreducer from "./AuthSlice"


const store = configureStore({
    reducer: {
        todo: todoreducer,
        auth: authreducer,
    }
})

export default store;