import { types } from "../types/types";


export const authLogin = (user) =>({
    type: types.authLogin,
    payload: user
})