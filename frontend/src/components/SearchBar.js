import * as React from 'react';
import { useState, useContext, useEffect } from "react"
import SearchIcon from '@mui/icons-material/Search'
import { getBooks } from "../api/axios"
import { CurrentBooksContext } from "../contexts/BooksContext"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
    const handleSubmit = (e) => e.preventDefault()
    const { setCurrentBooks } = useContext(CurrentBooksContext)
    
    useEffect(() => {
        const initialData = async () => {
            const results = await getBooks('barack+obama')
            setCurrentBooks(results)    
        }

        initialData()
            .catch(console.error)
      }, [])
    
    const handleSearchChange = async (e) => {
        if (e.target.value) {
            const results = await getBooks(e.target.value)
            setCurrentBooks(results)
        } else {
            console.log('test else 24' )
            const results = await getBooks('colorado')
            console.log('book results', results)
            setCurrentBooks(results)
        }
        console.log(e.target.value)
    }

    // THis is the desired styling from material UI
        return (
            <Box
                component="form" noValidate onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': { m: 3, width: 500 },
                }}
                autoComplete="on"
            >
                <TextField
                    id="search"
                    label="Search Books Here"
                    variant="outlined"
                    onChange={handleSearchChange} />
                    <button className="search__button">
                        <SearchIcon />
                    </button>
            </Box>
        )
}

        // this is Brentons original code vvvvvvvvv
//     return (
//         <header>
//             <form className="search" onSubmit={handleSubmit}>
//                 <input 
//                     className="search__input"
//                     type="text"
//                     id="search"
//                     onChange={handleSearchChange}
//                 />
//                 <button className="search__button">
//                     <SearchIcon />
//                 </button>
//             </form>
//         </header>
//     )
// }

export default SearchBar;