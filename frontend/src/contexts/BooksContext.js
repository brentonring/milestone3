import { createContext, useState } from "react";


export const CurrentBooksContext = createContext()

function CurrentBooksProvider({ children }){

    const [currentBooks, setCurrentBooks] = useState([])
  

    return (
        <CurrentBooksContext.Provider value={{ currentBooks, setCurrentBooks }}>
            {children}
        </CurrentBooksContext.Provider>
    )
}

export default CurrentBooksProvider