import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import AppRoutes from './Routes/AppRoutes'


const PaisesApp = () => {
  return (
    <Provider store={ store }>
        <AppRoutes />
    </Provider>
  )
}

export default PaisesApp