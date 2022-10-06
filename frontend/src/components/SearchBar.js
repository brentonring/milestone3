import * as React from 'react';
import { useState, useContext, useEffect } from "react"
import SearchIcon from '@mui/icons-material/Search'
import { getBooks } from "../api/axios"
import { CurrentBooksContext } from "../contexts/BooksContext"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const SearchBar = () => {
    const handleSubmit = (e) => e.preventDefault()
    const { setCurrentBooks, searchTerm, setSearchTerm } = useContext(CurrentBooksContext)
    const [quantity, setQuantity] = useState(12)

    useEffect(() => {
        const initialData = async () => {
            const results = await getBooks(searchTerm, quantity)
            setCurrentBooks(results)    
        }

        initialData()
            .catch(console.error)
      }, [])
    
    useEffect(() => {
        const fetchData = async () => {
            const results = await getBooks(searchTerm, quantity)
            setCurrentBooks(results)    
        }
        fetchData()
    }, [quantity, searchTerm])


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
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button className="search__button">
                    <SearchIcon />
                </button>
                <InputLabel># of Results</InputLabel>
                <Select 
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                    label="Quantity"
                >
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={36}>36</MenuItem>
                </Select>
            </Box>
        )
}

export default SearchBar;