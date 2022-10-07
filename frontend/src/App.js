import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';
import { Fragment, useContext } from 'react'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import SearchBar from './components/SearchBar';
import BookIndex from './books/BookIndex';
import BookShow from './books/BookShow';
import UserProfile from './profile/UserProfile';
import CurrentBooksProvider from './contexts/BooksContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <RelitAppBar/>
      <Router>
        <Routes>           
          <Route exact path='/' element={
            <Fragment>    
              <CurrentBooksProvider>
                <SearchBar />
                <HomeBody />
              </CurrentBooksProvider>
            </Fragment> 
          } />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          {/* <Route path="/books" element={<BookIndex />} /> */}
          <Route path="/:bookId" element={
            <Fragment>
              <CurrentBooksProvider>
                <BookShow />
              </CurrentBooksProvider>
            </Fragment>
          }/>
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
