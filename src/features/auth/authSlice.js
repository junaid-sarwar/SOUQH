import { createSlice } from '@reduxjs/toolkit';

// Initial state for authentication and users
const initialState = {
  user: null,  // User information will be stored here
  isAuthenticated: false,  // Tracks if the user is logged in
  error: null,  // Stores any login error messages
  users: []  // Add an array for users
};

// Slice for auth logic
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Handles successful login by storing user data
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    // Handles login failure by setting an error message
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    // Logs out the user by clearing user data and setting isAuthenticated to false
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    // Directly updates the user object
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Adds a new user to the users array
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    // Updates the users array with a new set of users
    setUsers: (state, action) => {
      state.users = action.payload;
    }
  }
});

// Selectors
export const selectUser = (state) => state.auth.user;  // Access user data
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;  // Check if user is authenticated
export const selectUsers = (state) => state.auth.users;  // Access the list of users

// Export actions and reducer
export const { loginSuccess, loginFailure, logout, setUser, addUser, setUsers } = authSlice.actions;
export default authSlice.reducer;
