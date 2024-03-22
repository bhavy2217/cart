import { combineReducers } from "redux";
import CartReducer from './CartReducer';
import CountReducer from "./CountReducer";

const MainReducer = combineReducers({
    CartReducer,
    CountReducer,
});

export default MainReducer;