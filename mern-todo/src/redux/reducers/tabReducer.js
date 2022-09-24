// import * as actionType from "../action/type";

// export const tabReducer = (state = actionType.ALL_TODOS, action) => {
//     switch (action.type) {
//         case actionType.TOGGLE_TAB:
//             return action.selected
//             break;

//         default:
//             return state
//             break;
//     }
// }

import * as actionTypes from '../action/type';


export const tabReducer = (state = actionTypes.ALL_TODOS, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_TAB:
            return action.selected
        default:
            return state;
    }
}