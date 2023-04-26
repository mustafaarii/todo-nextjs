import { createSlice } from '@reduxjs/toolkit'

export interface IAuth {
    userId:number|null,
    email:string|null,
    isAuth: boolean
}

const initialState : IAuth = {
    email: null,
    userId: null,
    isAuth: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true,
            state.userId = action.payload.userId,
            state.email = action.payload.email
        },
        logout: (state) => {
            state.isAuth = false,
            state.userId = null,
            state.email = null
        }
    }
})

export const authReducer = authSlice.reducer;
export const {login, logout} = authSlice.actions;