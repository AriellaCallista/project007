// import { createStore } from "redux";

// const initialState = {
//     loading: false,
    
// }

// const reducer = ( state = initialState, action ) => {
//     if(action.type === 'SET_LOADING') {
//         return {
//             ...state,
//             loading: action.value
//         }
//     }
//     return state
// }

// const store = createStore(reducer)

// export default store

import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balance-slice';

const store = configureStore({
    reducer: {
        balance: balanceReducer,
    }
});

export default store;