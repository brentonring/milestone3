import { createContext, useState } from "react";


export const CurrentBooksContext = createContext()

function CurrentBooksProvider({ children }){

    const [currentBooks, setCurrentBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
  

    return (
        <CurrentBooksContext.Provider value={{ currentBooks, setCurrentBooks, searchTerm, setSearchTerm }}>
            {children}
        </CurrentBooksContext.Provider>
    )
}

export default CurrentBooksProvider