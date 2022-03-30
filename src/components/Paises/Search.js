import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { searchPaisesPerName } from '../../redux/actions/paises';

const Search = () => {

  const [formValues, handleInputChange] = useForm({
    value: ''
  })

  const dispatch = useDispatch();

  const { value } = formValues;

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(searchPaisesPerName(value));
  }

  return (
    <form className='form_search' onSubmit={handleSubmit}>
       <input 
            type="text" 
            name='value' 
            pattern="[A-Za-z]*" 
            id="base-input"
            value={value}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          />
    </form>
  )
}

export default Search