import './App.css';
import Home from './pages/home/home'
import AboutUs from './pages/about-us/aboutUs';
import ContactUs from './components/pages/contactUs/contactUs';
import Register from './pages/register/register';

function App() {
  return (
    <div className="App">
      <Home className="home-page" />
      <AboutUs />
      <ContactUs />
      <Register />
    </div>
  );
}

export default App;
