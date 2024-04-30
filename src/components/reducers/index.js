import AuthReducer from "./AuthReducer";
import NavReducer from "./NavReducer";
import { combineReducers } from "redux";

export default combineReducers(
    {
        AuthReducer: AuthReducer,
        NavReducer: NavReducer
    }
);