// import logo from './logo.svg';
import './App.css';
import RelitAppBar from './components/AppBar.js';
import {getBooks} from './api/axios'
import React from 'react';
import {useState, useEffect} from 'react'

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
      <h1>Hello World</h1>     
    </div>
  );
}

export default App;
