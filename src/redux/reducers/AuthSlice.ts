import { AuthDTO } from '@/pages/admin/signin'
import { loginService } from '@/src/services/auth'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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

export const login = createAsyncThunk<any, AuthDTO>(
    "auth/login",
    async(auth:AuthDTO) => {
        const user = await loginService(auth);
        return JSON.parse(user);
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuth = false,
            state.userId = null,
            state.email = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, () => {})

        builder.addCase(login.rejected, (state, action) => {
            state.email = null;
            state.isAuth = false;
            state.userId = null;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.isAuth = true;
            state.userId = 1;
        })
    },
})

export const authReducer = authSlice.reducer;
export const {logout} = authSlice.actions;