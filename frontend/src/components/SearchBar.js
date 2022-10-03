import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search'
// import { getBooks } from "../api/axios"

const SearchBar = ({books, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        // let results = getBooks()
        console.log(e.target.value)
        if (!e.target.value) return setSearchResults(books)

        const resultsArray = books.filter(book => book.volumeInfo.title.includes(e.target.value) || book.volumeInfo.author.includes(e.target.value))

        setSearchResults(resultsArray)
    }
    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input 
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button">
                    <SearchIcon />
                </button>
            </form>
        </header>
    )
}
  
export default SearchBar