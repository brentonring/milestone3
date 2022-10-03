import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';
import { getBooks } from './api/axios'
import { useState, useEffect } from 'react'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getBooks().then(json => {
      setBooks(json)
      return json
    }).then(json => {
      setSearchResults(json)
    })
  }, [])

  
  return (
    <div className="App">
      <RelitAppBar/>
      {/* <LoginForm/>
      <SignUpForm/> */}
      <SearchBar books={books} setSearchResults={setSearchResults} />
      <HomeBody searchResults={searchResults}/>
      <Footer/>
    </div>
  );
}

export default App;
