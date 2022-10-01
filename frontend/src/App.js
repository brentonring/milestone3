// import logo from './logo.svg';
import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';

function App() {
  return (
    <div className="App">
      <RelitAppBar/>
      <HomeBody/>
      <Footer/>
    </div>
  );
}

export default App;
