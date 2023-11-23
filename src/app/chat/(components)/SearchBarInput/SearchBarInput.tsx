import React from 'react'
import './styles.scss'

const SearchIdentifier = "J"

function SearchBar() {
    return (
        <div className='searchBarContainer'>
            <span>{SearchIdentifier}</span>
            <input type='search' placeholder='Search by name, number...' />
            <button>
                <img src="/images/icon_search.svg" alt='search-icon' width={17} height={18} />
            </button>
        </div>
    )
}

export default SearchBar