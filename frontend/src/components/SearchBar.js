import { useState } from "react"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"

const SearchBar = ({setSearchQuery}) => {
    const handleSubmit = (e) => e.preventDefault()
    return (
        <header>
            <form className="search" onSubmit={handleSubmit}>
                <input 
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                <button className="search__button"></button>
            </form>
        </header>
    )
}
  
export default SearchBar