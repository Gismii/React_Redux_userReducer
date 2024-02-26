import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => ({

    type: CartActionTypes.ADD_PRODUCT,
    payload,

});

export const removeProductToCart = (payload) => ({

    type: CartActionTypes.REMOVE_PRODUCT,
    payload,

});

