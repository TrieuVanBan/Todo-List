import { createSlice } from "@reduxjs/toolkit";

const uid = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    todos: [
      // { id: 1, title: "Task 1", description: 'Description for Item' },
      // { id: 2, title: "Task 2", description: 'Description for Item' },
      // { id: 3, title: "Task 3", description: 'This is the 1st job description. Please add more work. Thankyou!' },
      // { id: 4, title: "Task 4", description: 'Description for Item', tag: 'hello, cee, short, home,hello, cee, short, hom,hello, cee, short, hom' },
    ],
    inputTaskValue: "",
  },
  reducers: {
    setDeleteTodo: (state, action) => {
      console.log(action.payload);
      const idxTask = state.todos.filter((task) => task.id !== action.payload);
      state.todos = idxTask;
    },
    addToTodos: (state, action) => {
      console.log("newTask", action.payload);
      const newTask = {
        id: uid(),
        title: action.payload.title,
        description: action.payload.description,
        time: action.payload.time,
        tag: action.payload.tag
      };
      state.todos.unshift(newTask);
      // state.todos = [
      //   {
      //     id: state.todos.length + 1,
      //     title: action.payload.title,
      //     description: action.payload.description,
      //   },
      //   ...state.todos];
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
