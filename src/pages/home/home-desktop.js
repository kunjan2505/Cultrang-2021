import React from 'react'
import './home-desktop.css'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <>
        <div className="home--container">
            <div className="navbar-container">
                <div className="items">
                    <div className="item item1">
                        HOME
                    </div>
                    <div className="item item2">
                        <Link to="about" spy={true} smooth={true}>
                            ABOUT US
                        </Link>
                    </div>
                    <div className="item item3">
                        <Link to="events" spy={true} smooth={true}>
                            EVENTS
                        </Link>
                    </div>
                    <div className="item item4">
                        <Link to="pro-events" spy={true} smooth={true}>
                            PRO EVENTS
                        </Link>
                    </div>
                    <div className="item item5">
                        <Link to="sponsor" spy={true} smooth={true}>
                            SPONSOR
                        </Link>
                    </div>
                    <div className="item item6">
                        <Link to="contact" spy={true} smooth={true}>
                            CONTACT US
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



export default Home;