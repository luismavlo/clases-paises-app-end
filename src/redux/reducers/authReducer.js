import { types } from '../types/types'

const initialState = {
    userLogin: '',
}



export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return{
                ...state,
                userLogin: action.payload
            }
        default:
            return state;
    }
}