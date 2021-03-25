import React from 'react'
import './pro-events.css'
import clouds from './peventsTop.svg'
import pevntsbottom from './peventsBottom.svg'
import ticett1 from './ticket1.png'
import ticket2 from './ticket2.png'
import ticket3 from './ticket3.png'
import ticket4 from './ticket4.png'
import ticket5 from './ticket5.png'
import mobilebottom from './mobile-bottom.png' 

const Proevents = () => {
    return (
        <div className="pro-events-container" id="pro-events">
            <div className="events-context">
                <div className="pevnts-top">
                    <img src={clouds} alt="clouds"></img>
                </div>
                <div className="pevents-tickets">

                    <div className="pevents-r1">
                        <a href="/pro-events/comedyNight">
                            <div className="ticket1-container">
                                <img className="ticket" src={ticett1} alt="ticet"></img>
                            </div>
                        </a>
                        <a href="/pro-events/melodiousAuRevoir">
                            <div className="ticket2-container">
                                <img className="ticket" src={ticket2} alt="ticet"></img>
                            </div>
                        </a>
                    </div>

                    <div className="pevents-r2">
                        <a href="/pro-events/musicWorkshop">
                            <div className="ticket3-container">
                                <img className="ticket3" src={ticket3} alt="ticet"></img>
                            </div>
                        </a>
                        <a href="/pro-events/theaterWorkshop">
                            <div className="ticket4-container">
                                <img className="ticket4" src={ticket4} alt="ticet"></img>
                            </div>
                        </a>
                        <a href="/pro-events/hipHopWorkshop">
                            <div className="ticket5-container">
                                <img className="ticket5" src={ticket5} alt="ticet"></img>
                            </div>
                        </a>
                    </div>

                    <div className="pevents-r3">
                        <a href="/pro-events/hipHopWorkshop">
                            <div className="ticket5-container-m">
                                <img className="ticket5" src={ticket5} alt="ticet"></img>
                            </div>
                        </a>
                    </div>
                    

                </div>
                    
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
        </div>
    )
}

export default Proevents