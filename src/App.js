import './App.css';
import Home from './pages/home/home'
import AboutUs from './pages/about-us/aboutUs';
import ContactUs from './pages/contactUs/contactUs';

function App() {
  return (
    <div className="App">
      <Home className="home-page" />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
