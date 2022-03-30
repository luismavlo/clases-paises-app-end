import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { authLogin } from '../../redux/actions/auth';

const LoginScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
      name_login: '',
  })

  const { name_login } = formValues;

  const handleLogin = (e) =>{
    e.preventDefault();
    dispatch(authLogin(name_login))
    navigate('/');
  }

  return (
    <div className='login__container'>
      <div className='login__card'>
        <h1>Iniciar Sesión</h1>
        <span>Escribe tu nombre</span>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <input 
                  type="text" 
                  id="base-input" 
                  name='name_login'
                  value={name_login}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" style={{width: '100%'}}>Login</button>
        </form>
      </div>
    </div>
  )
  }

export default LoginScreen