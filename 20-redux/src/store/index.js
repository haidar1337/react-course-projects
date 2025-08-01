import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isHidden: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.isHidden = !state.isHidden;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: { email: "", isLoggedIn: false },
  reducers: {
    login(state, payload) {
      console.log(payload);
      state.email = payload.email;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.email = "";
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
