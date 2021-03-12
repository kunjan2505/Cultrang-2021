import React from 'react'
import Homedesktop from './home-desktop'
import Homemobile from './home-mobile'
import './home.css'

const Home = () => {
    return (
       <>
       <div className="home-desktop"><Homedesktop></Homedesktop></div>
       <div className="home-mobile"><Homemobile></Homemobile></div>
       </>
    );
}

export default Home;