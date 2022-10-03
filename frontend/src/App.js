import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';
import { getBooks } from './api/axios'
import { useState, useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <RelitAppBar/>
      <HomeBody/>
      <Footer/>
    </div>
  );
}

export default App;
