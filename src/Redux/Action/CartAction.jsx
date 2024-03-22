import { ActionTypes } from "../Constants/Constants";

export const addToCart = (payload) => {
    return {
        type: ActionTypes.AddToCart,
        payload: payload,
    };
};

export const EmptyCart = (payload) => {
    return {
        type: ActionTypes.EmptyCart,
        payload: payload,
    };
};

export const RemoveCartItem = (payload) => {
    return {
        type: ActionTypes.RemoveCartItem,
        payload: payload,
    };
};
