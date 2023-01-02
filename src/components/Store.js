import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "./Services/UserReducer.js/UserReducer";

export const store = createStore(UserReducer, applyMiddleware(thunk));
