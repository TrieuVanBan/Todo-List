import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    todos: [
      { id: 1, title: "Task 1", description: 'Description for Item' },
      { id: 2, title: "Task 2", description: ' Description for Item' },
      { id: 3, title: "Task 3", description: 'Description for Item' },
      { id: 5, title: "Task 4", description: 'Description for Item' },
    ],
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
  todoList.actions;

export default todoList.reducer;
