import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchComponent = ({handleSearch}) => {
    return(
        <div className='search'>
            <MdSearch className='search-icon' size='1.3em' />
            <input onChange = { e => handleSearch(e.target.value)}   type='text' placeholder='Search Notes' />
        </div>
    )
}

export default SearchComponent