import * as React from 'react';
import { useState, useContext, useEffect } from "react"
import { getBooks } from "../api/axios"
import { CurrentBooksContext } from "../contexts/BooksContext"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid';

const SearchBar = () => {
    const handleSubmit = (e) => e.preventDefault()
    const { setCurrentBooks, searchTerm, setSearchTerm } = useContext(CurrentBooksContext)
    const [quantity, setQuantity] = useState(12)
    
    useEffect(() => {
        const fetchData = async () => {
            const results = await getBooks(searchTerm, quantity)
            setCurrentBooks(results)    
        }
        fetchData()
            .catch(console.error)
    }, [quantity, searchTerm])


        return (
            <Box
                component="form" noValidate onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': { m: 3, width: '300px' }, display: 'inline-flex', 
                }}
                autoComplete="on"
            >
                <Grid>
                <TextField
                        fullWidth
                        id="outlined-search"
                        label="Search Books Here" 
                        type="search"
                        variant="standard"
                        onChange={(e) => setSearchTerm(e.target.value)}                 
                        color="warning"
                        focused
                    />
                    <InputLabel
                        style={{fontSize: 11, color: '#2F4858'}}
                        sx={{ mt: 2 }}
                        >
                            # of Results
                    </InputLabel>
                    <Select
                        style={{fontSize: 12, color: '#0B295B', width: 60, height: 31 }}
                        color="warning"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                        label="Quantity"
                        sx={{mb: 5}}
                    >
                        <MenuItem style={{fontSize: 12, color: '#0B295B'}} value={12}>12</MenuItem>
                        <MenuItem style={{fontSize: 12, color: '#0B295B'}} value={24}>24</MenuItem>
                        <MenuItem style={{fontSize: 12, color: '#0B295B'}} value={36}>36</MenuItem>
                    </Select>
                </Grid>
            </Box>
        )
}

export default SearchBar;
