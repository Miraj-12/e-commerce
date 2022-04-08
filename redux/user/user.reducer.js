import { userActionType } from "./user.type";
const initialState = {
    currentUser: null
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActionType:
            return {
                ...state,
                currentUser: action.payload
            }


        default:
            return state;
    }
}
export default userReducer;