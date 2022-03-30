import axios from "axios"
import { types } from "../types/types"

export const paisesSetPaises = ( paises ) =>({
    type: types.paisesSetPaises,
    payload: paises
})

export const searchPaisesPerName = ( termino ) =>{
    return (dispatch) =>{
        axios.get(`https://restcountries.com/v3.1/name/${termino}`)
             .then(resp => dispatch(paisesSetPaises(resp.data)))
    }
}

export const searchPaisesPerRegion = ( termino ) =>{
    return(dispatch) =>{
        axios.get(`https://restcountries.com/v3.1/region/${ termino }`)
             .then(resp => dispatch(paisesSetPaises(resp.data)))
    }
}