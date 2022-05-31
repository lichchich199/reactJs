// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();

// //reducer là 1 function để cập nhật giá trị state trong kho chung dựa trên giá trị hiện tại
// const store = createStore(rootReducer, composedEnhancers);

// export default store;


//use redux tookit
import { configureStore } from "@reduxjs/toolkit";
// import filterReducer from "../components/Filters/FiltersSlice";
// import todoListReducer from "../components/Todo/TodoSlice";
import FiltersSlice from "../components/Filters/FiltersSlice";
import TodoSlice from "../components/Todo/TodoSlice";

const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: TodoSlice.reducer
    }
})
export default store;