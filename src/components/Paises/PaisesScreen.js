import React from 'react'
import Navbar from '../../shared/Navbar'
import Search from './Search'
import Table from './Table'

const PaisesScreen = () => {
  return (
    <>
      <Navbar title="BUSCAR PAÍS" />
      <br />
      <div className="content_form_search">
        <Search />
        <br />
        <Table />
      </div>
    </>
  )
}

export default PaisesScreen