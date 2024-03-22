import { ActionTypes } from '../Constants/Constants'
const initState = {
    counter: 0,
};

const CountReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.CountIncrement:
            return {
                ...state,
                counter: payload,
            };
        case ActionTypes.CountDecrement:
            return {
                ...state,
                counter: payload,
            };
        case ActionTypes.CountZero:
            return{
                ...state,
                counter: payload,
            };
        case ActionTypes.CountDividebytwo:
            return{
                ...state,
                counter : payload,
            };
        default:
            return state;
    }
}
export default CountReducer;