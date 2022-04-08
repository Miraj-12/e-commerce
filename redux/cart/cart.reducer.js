import CartActionTypes from "./cart.type"
const IntitialState = {
    hidden: true
}
const CartReducer = (state = IntitialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}
export default CartReducer;