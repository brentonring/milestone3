import { useState } from 'react';
import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';
import SearchBar from './components/SearchBar';
import CurrentBooksProvider from './contexts/BooksContext';


function App() {

  return (
    <div className="App">
      <RelitAppBar/>
      <CurrentBooksProvider>
        <SearchBar books={currentBooks} setBooks={setCurrentBooks} handleSearchChange={handleSearchChange} />
        <HomeBody books={currentBooks} />
      </CurrentBooksProvider>
      <Footer/>
    </div>
  );
}

export default App;
