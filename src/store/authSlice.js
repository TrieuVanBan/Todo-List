import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    inputTaskValue: "",
  },
  reducers: {
    setDeleteTodo: (state, action) => {
      // console.log(action.payload);
      const idxTask = state.todos.filter((task) => task.id !== action.payload);
      state.todos = idxTask;
    },
    addToTodos: (state, action) => {
      console.log(action.payload);
      let action_label = action.payload;
      const newTask = {
        id: state.todos.length + 1,
        label: action_label,
      };
      state.todos.push(newTask);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDeleteTodo, addToTodos, incrementByAmount } =
  authSlice.actions;

export default authSlice.reducer;
