import React from 'react'
import './pro-events.css'
import clouds from './peventsTop.svg'
import pevntsbottom from './peventsBottom.svg'
import ticett1 from './ticket1.png'
import ticket2 from './ticket2.png'
import mobilebottom from './mobile-bottom.png' 

const Proevents = () => {
    return (
        <div className="pro-events-container" id="pro-events">
            <div className="events-context">
                <div className="pevnts-top">
                    <img src={clouds} alt="clouds"></img>
                </div>
                <div className="pevents-tickets">
                        <a href="#">
                            <div className="ticket1-container">
                                <img className="ticket" src={ticett1} alt="ticet"></img>
                            </div>
                        </a>
                        <a href="#">
                            <div className="ticket2-container">
                                <img className="ticket" src={ticket2} alt="ticet"></img>
                            </div>
                        </a>
                    </div>
                    {/* <div className="r2">
                        <a href="#">
                            <div className="r2c1">
                                <img className="ticket3" src={peventsticket} alt="ticet"></img>
                            </div>
                        </a>
                        <a href="#">
                            <div className="r2c2">
                                <img className="ticket4" src={peventsticket} alt="ticet"></img>
                            </div>
                        </a>
                    </div> */}
                <div className="pevents-bottom">
                    <img src={pevntsbottom} alt="pevents-bottom"></img>
                </div>
                <div className="pevents-mobile">
                    <div className="pevents-title">
                        PRO EVENTS
                    </div>
                    <div className="pevnts-mobile-bottom">
                        <img src={mobilebottom} alt="pevents-bottm"></img>
                    </div>
                </div>
            </div>
            <div className="blank-space-bottom"></div>
        </div>
    )
}

export default Proevents