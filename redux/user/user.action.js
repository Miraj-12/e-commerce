import { userActionType } from "./user.type"
export const setCurrentUser = user => ({
    type: userActionType,
    payload: user
})