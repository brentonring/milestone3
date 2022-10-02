import { createContext, useState } from "react";

const books = [{
    id: "1",
    author:"David",
    title: "test 1",
  
  },
  {
    id: "2",
    author:"Brenton",
    title: "test 2",
  
  },
  {
    id: "3",
    author:"Eric",
    title: "test 3",
  
}]
  

export const CurrentBooks = createContext()

function CurrentBooksProvider({ children }){

    const [currentBooks, setCurrentBooks] = useState(books)
  

    return (
        <CurrentBooks.Provider value={{ currentBooks, setCurrentBooks }}>
            {children}
        </CurrentBooks.Provider>
    )
}

export default CurrentBooksProvider