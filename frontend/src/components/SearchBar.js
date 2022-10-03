import { useContext, useEffect, useState } from "react"
import { CurrentBooks } from "../contexts/BooksContext"

// const data = [{
//     author:"David",
//     title: "test 1",

// },
// {
//     author:"Brenton",
//     title: "test 2",

// },
// {
//     author:"Eric",
//     title: "test 3",

// }]



const SearchBar = () => {
    const { currentBooks, setCurrentBooks } = useContext(CurrentBooks)
    useEffect(() => {
        setCurrentBooks(currentBooks)
    }, [currentBooks, setCurrentBooks])
    console.log(currentBooks)
    const handleSearchChange = (e) => {
        console.log(e.target.value)
        const filteredBooks = currentBooks.filter(book => {
            return book.title.includes(e.target.value) 
        })
        setCurrentBooks(filteredBooks)
    }
    return (
        <header>
            <form className="search" >
                <input 
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                {/* <button className="search__button"></button> */}
            </form>
        </header>
    )
}
  
export default SearchBar