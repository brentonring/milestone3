import './App.css';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HomeBody from './components/HomeBody';
import RelitAppBar from './components/AppBar.js';
// import BookIndex from './books/BookIndex';
// import Error404 from './components/Error404';


function App() {
  return (
    <div className="App">
      <RelitAppBar/>
      {/* <BookIndex /> */}
      <h1>Hello World</h1>     
    </div>
  );
}

export default App;
