import { ActionTypes } from "../Constants/Constants";

export const CountIncrement = (payload) => {
    return {
        type: ActionTypes.CountIncrement,
        payload: payload,
    };
};
export const CountDecrement = (payload) => {
    return {
        type: ActionTypes.CountDecrement,
        payload: payload,
    };
};
export const CountZero = (payload) =>{
    return {
        type : ActionTypes.CountZero,
        payload : payload,
    };
};
export const CountDividebytwo = (payload) =>{
    return {
        type : ActionTypes.CountDividebytwo,
        payload : payload,
    };
};