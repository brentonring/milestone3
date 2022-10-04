import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';
import { getBooks } from './api/axios'
import { useState, useEffect } from 'react'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import SearchBar from './components/SearchBar';
import CurrentBooksProvider from './contexts/BooksContext';

function App() {
  const [searchResults, setSearchResults] = useState([])
  
  return (
    <div className="App">
      <RelitAppBar/>
      {/* <LoginForm/>
      <SignUpForm/> */}
      <CurrentBooksProvider>
        <SearchBar />
        <HomeBody searchResults={searchResults}/>
      </CurrentBooksProvider>
      <Footer/>
    </div>
  );
}

export default App;
