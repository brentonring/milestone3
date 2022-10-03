import { createContext, useState } from "react";

const books = [{
    id: "1",
    author:"David",
    title: "test 1",
    description: "Narwhal mustache before they sold out celiac, iceland plaid bicycle  distillery. Hella humblebrag meh fixie shabby chic edison bulb art party thundercats roof party. Snackwave pug chia deep vibecession. Selfies biodiesel aesthetic meditation, chambray lumbersexual etsy semiotics."
  },
  {
    id: "2",
    author:"Brenton",
    title: "test 2",
    description: "Narwhal mustache before they sold out celiac, iceland plaid bicycle  distillery. Hella humblebrag meh fixie shabby chic edison bulb art party thundercats roof party. Snackwave pug chia deep vibecession. Selfies biodiesel aesthetic meditation, chambray lumbersexual etsy semiotics."
  },
  {
    id: "3",
    author:"Eric",
    title: "test 3",
    description: "Narwhal mustache before they sold out celiac, iceland plaid bicycle  distillery. Hella humblebrag meh fixie shabby chic edison bulb art party thundercats roof party. Snackwave pug chia deep vibecession. Selfies biodiesel aesthetic meditation, chambray lumbersexual etsy semiotics."
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