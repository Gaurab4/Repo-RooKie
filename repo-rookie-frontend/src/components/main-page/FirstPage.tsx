import React from 'react'
import SearchBarPage from '../SearchBar/SearchBarPage';
import Navbar from '../Navbar/Navbar';
import ListPage from '../List/ListPage';

type Props = { };


const FirstPage = (props: Props) => {
  return (
    <div className=''>
      <Navbar/>
      <SearchBarPage/>
      <ListPage/>
    </div>
  )
}


export default FirstPage