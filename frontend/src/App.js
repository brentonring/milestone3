import './App.css';
import RelitAppBar from './components/AppBar.js';
import Footer from './components/Footer.js';
import HomeBody from './components/HomeBody.js';
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';

function App() {
  return (
    <div className="App">
      <RelitAppBar/>
      {/* <LoginForm/>
      <SignUpForm/> */}
      <HomeBody/>
      <Footer/>
    </div>
  );
}

export default App;
