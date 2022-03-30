import React from 'react'
import { useDispatch } from 'react-redux';
import { searchPaisesPerRegion } from '../../redux/actions/paises';
import Navbar from '../../shared/Navbar'
import Table from './Table';

const regiones = ['africa', 'americas', 'asia', 'europe', 'oceania']

const RegionScreen = () => {

  const dispatch = useDispatch();

  const handleSearch = ( region ) => {
      console.log(region)
      dispatch(searchPaisesPerRegion(region))
  } 

  return (
    <>
      <Navbar title="BUSCAR POR REGIÓN" />
      <br />
      <div className="content_form_search">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {
            regiones.map(region => (
              <button type="button" key={region} onClick={() => handleSearch(region)} className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                { region }
              </button>
            ))
          }
        </div>
        <br />
        <Table />
      </div>
    </>
  )
}

export default RegionScreen