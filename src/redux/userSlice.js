import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        currentUser : null,
        isFetching : false,
        error : false,
        errorMessage : null
    },
    reducers : {
        loginStart :(state) => {
            state.isFetching = true;
            state.error = false;
            state.errorMessage = null;
        },
        loginSuccess : (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false;
            state.errorMessage = null;
        },
        loginFailure : (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMessage = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
            state.errorMessage = null;
            localStorage.removeItem('persist:root');
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logout} = userSlice.actions;

export default userSlice.reducer;