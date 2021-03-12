import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import './home-mobile.css'

const Home = () => {
    return (
        <div id="home">
        <div className="home-container">
            <Menu pageWrapId="page-wrap">
                <a href="#home" className="menu-item">HOME</a>
                <a href="#about" className="menu-item">ABOUT US</a>
                <a href="#events" className="menu-item">EVENTS</a>
                <a href="#pro-events" className="menu-item">PRO EVENTS</a>
                <a href="#sponsor" className="menu-item">SPONSOR</a>
                <a href="#contact" className="menu-item">CONTACT US</a>
            </Menu>
        </div>
        <div id="page-wrap">
            <div className="cultrang-title">CULTRANG</div>
            <div className="cloud1"></div>
            <div className="cloud2"></div>
            <div className="bottom">
                <div className="taj"></div>
                <div className="plane1"></div>
                <div className="eiffel-tower"></div>
                <div className="fairywheel"></div>
                <div className="baloon1"></div>
                <div className="baloon2"></div>
                <div className="plane2"></div>
                <div className="moon"></div>
            </div>
        </div>
        </div>
    )
}

export default Home;