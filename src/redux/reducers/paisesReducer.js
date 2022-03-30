import { types } from "../types/types";


const initialState = {
    paises: []
}


export const paisesReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.paisesSetPaises:
            return{
                ...state,
                paises: action.payload
            }
            
    
        default:
            return state;
    }
}

