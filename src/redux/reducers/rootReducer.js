import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { paisesReducer } from "./paisesReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    paises: paisesReducer
})