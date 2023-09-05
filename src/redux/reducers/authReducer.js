import * as types from "../actionTypes/authActionTypes";

const initialState = {
   isAutheticated: false,
   user: {}
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.SIGN_IN:
         return {
            ...state,
            isAutheticated: true,
            user: action.payload,
         };
      case types.SIGN_OUT:
         return {
            ...state,
            isAutheticated: false,
            user: {},
         };
      default:
         return state
   }
}

export default authReducer; 