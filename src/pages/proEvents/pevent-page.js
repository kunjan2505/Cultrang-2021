import React from 'react'
import { useParams, Link } from 'react-router-dom';
import clouds from './peventsTop.svg'
import pevntsbottom from './peventsBottom.svg'
import ticett1 from './ticket1.png'
import ticket2 from './ticket2.png'
import mobilebottom from './mobile-bottom.png' 
import './pevent-page.css'


const Event = () => {
    const { id } = useParams();
    var title = "COMEDY NIGHT"
    var ticket = ticett1
    var discription = "discription of ticket 1"
    if(id == "melodiousAuRevoir"){
        title = "MELODIOUS AU REVOIR"
        ticket = ticket2
        discription = "discription of ticket 2"
    }
    
    return (
        <div className="pro-event-container">
            <div className="event-context">
                <div className="pevnt-top">
                    <img src={clouds} alt="clouds"></img>
                </div>

                <div className="pevent-tickets">
                    <div className="ticket-container">
                        <img className="ticket" src={ticket} alt="ticet"></img>
                    </div>
                    <div className="pevent-register">
                        <div className="pevent-title">{title}</div>
                        <div className="detail-container">
                            {discription}
                        </div>
                        <div className='register-button'>
							<Link to={`/registeration/${id}`}>
								<p className='register-text'>REGISTER</p>
							</Link>
						</div>
                    </div>
                </div>
                    
                <div className="pevent-bottom">
                    <img src={pevntsbottom} alt="pevent-bottom"></img>
                </div>
                <div className="pevent-mobile">
                    <div className="pevent-tickets-m">
                        <div className="pevent-title">{title}</div>
                        <div className="ticket-container">
                            <img className="ticket" src={ticket} alt="ticet"></img>
                        </div>
                        <div className="details-m">
                            <div className="detail-container-m">
                                {discription}
                            </div>
                        </div>
                        <div className="registre-btn-container">
                            <div className='register-button-m'>
                                <Link to={`/registeration/${id}`}>
                                    <p className='register-text'>REGISTER</p>
                                </Link>
                            </div>  
                        </div>   
                    </div>
                    <div className="pevnt-mobile-bottom">
                        <img src={mobilebottom} alt="pevent-bottm"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;