import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { authLogin } from '../redux/actions/auth'

const Sidebar = () => {

    const { userLogin } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch(authLogin(""))
    }

    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 aside">
                <ul className="space-y-2">
                    <h2> { userLogin } </h2>
                    <hr />
                    <li>
                        <Link to="/paises" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className="ml-3">Buscar Pais</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/region" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className="ml-3">Buscar pais por region</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/capital" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span className="ml-3">Buscar pais por capital</span>
                        </Link>
                    </li>
                   <li>
                        <button onClick={handleLogout} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar