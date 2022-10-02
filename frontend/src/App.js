import { useState } from 'react';
import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';
import SearchBar from './components/SearchBar';
import CurrentBooksProvider from './contexts/BooksContext';

const data = [{
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

function App() {
  const [books, setBooks] = useState(data)
  const handleSearchChange = (e) => {
    console.log(e.target.value)
    const filteredBooks = books.filter(book => {
        return book.title.includes(e.target.value) 
    })
    setBooks(filteredBooks)
  }
  return (
    <div className="App">
      <RelitAppBar/>
      <CurrentBooksProvider>
        <SearchBar books={books} setBooks={setBooks} handleSearchChange={handleSearchChange} />
        <HomeBody books={books} />
      </CurrentBooksProvider>
      <Footer/>
    </div>
  );
}

export default App;
