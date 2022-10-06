import { createContext, useState } from "react";


export const CurrentBooksContext = createContext()

function CurrentBooksProvider({ children }){

    const [currentBooks, setCurrentBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState('barack+obama')
    const [shownBook, setShownBook] = useState([])
    const [shownBookData, setShownBookData] = useState([])
  

    return (
        <CurrentBooksContext.Provider value={{ currentBooks, setCurrentBooks, searchTerm, setSearchTerm, shownBook, setShownBook, shownBookData, setShownBookData }}>
            {children}
        </CurrentBooksContext.Provider>
    )
}

export default CurrentBooksProvider