import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Table = () => {

    const { paises } = useSelector(state => state.paises);

    console.log(paises);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-table">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Bandera
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Población
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Ver</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paises.map((pais,index) => (
                            <tr key={pais.name.common} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    <img src={pais.flags.svg} className="bandera_svg" alt="bandera" />
                                </td>
                                <td className="px-6 py-4">
                                    {pais.name.common}
                                </td>
                                <td className="px-6 py-4">
                                    {pais.population}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <Link to="/pais" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table