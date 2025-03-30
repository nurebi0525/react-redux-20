import { createSlice } from "@reduxjs/toolkit"

const initialState = ({
    isAuthentif: false,
    email: ""
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state,action) => {
            state.isAuthentif = true
            state.email = action.payload.email
        },
        logout: (state) =>  {
            state.isAuthentif = false
            state.email = ""
        },
        resetAuth: (state) => {
             state.isAuthentif = false
            state.email = ""
        }
    }
})

export const {login, logout, resetAuth} = authSlice.actions;
export default authSlice.reducer;