import { useState, useContext } from "react"
import SearchIcon from '@mui/icons-material/Search'
import { getBooks } from "../api/axios"
import { CurrentBooksContext } from "../contexts/BooksContext"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const handleSubmit = (e) => e.preventDefault()
    const { setCurrentBooks } = useContext(CurrentBooksContext)

    // const [searchResults, setSearchResults] = useState([])

    // useEffect(() => {
    //     async function invokeGetBooks() {
    //         // await getBooks(searchTerm)
    //     }
    //     // getBooks().then(json => {
    //     //   setBooks(json)
    //     //   return json
    //     // }).then(json => {
    //     //   setSearchResults(json)
    //     // })
    //   }, [])
    
    const handleSearchChange = async (e) => {
        let results = await getBooks(e.target.value)
        console.log('book results',results)
        setCurrentBooks(results)
        // setSearchTerm(e.target.value)
        // let results = getBooks()
        console.log(e.target.value)
        // if (!e.target.value) return setSearchResults(books)

        // const resultsArray = books.filter(book => book.volumeInfo.title.includes(e.target.value) || book.volumeInfo.author.includes(e.target.value))

        // setSearchResults(resultsArray)
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