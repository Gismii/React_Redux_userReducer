import userActionTypes from "./action-types";

const initialState = {
    currentUser: null,
};

const userReducer = (state = initialState, action) => {

    // A melhor opção é o switch, entretanto, poderá usar o IF tamém se preferir

    switch (action.type) {
        case userActionTypes.LOGIN:

            return { ...state, currentUser: action.payload };

        case userActionTypes.LOGOUT:

            return { ...state, currentUser: null };


        default:

            return state;
    }

};

export default userReducer;