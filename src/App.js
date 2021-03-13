import './App.css';
import Home from './pages/home/home'
import AboutUs from './pages/about-us/aboutUs';
import ContactUs from './pages/contactUs/contactUs';
import Register from './pages/register/register';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about-us' component={AboutUs} />
					<Route exact path='/contact-us' component={ContactUs} />
					<Route exact path='/events' />
					<Register />
				</Switch>
			</div>
		);
}

export default App;
