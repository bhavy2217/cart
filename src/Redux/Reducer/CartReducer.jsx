import { ActionTypes } from '../Constants/Constants'
const initState = {
    cart : [],
};

const CartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.AddToCart:
            return {
                ...state,
                cart: payload,
            };
        case ActionTypes.EmptyCart:
            return {
                ...state,
                cart: payload,
            };
        case ActionTypes.RemoveCartItem:
            return {
                ...state,
                cart: payload,
            };
        default:
            return state;
    }
}
export default CartReducer;