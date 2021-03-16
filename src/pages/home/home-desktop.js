import React from 'react'
import './home-desktop.css'

const Home = () => {
    return (
					<>
						<div className='home--container'>
							<div className='navbar-container'>
								<div className='items'>
									<div className='item item1'>HOME</div>
									<div className='item item2'>
										<a href='#about'>ABOUT US</a>
									</div>
									<div className='item item3'>
										<a href='#events'>EVENTS</a>
									</div>
									<div className='item item4'>
										<a href='#pro-events'>PRO EVENTS</a>
									</div>
									<div className='item item5'>
										<a href='#sponsor'>SPONSOR</a>
									</div>
									<div className='item item6'>
										<a href='#contact'>CONTACT US</a>
									</div>
									<div className='item item7'>
										<a href='https://drive.google.com/u/0/uc?id=1ehuudTD-AaFSG7fwus6KbbC_7xtOdU-c&export=download'>
											RULEBOOK
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='bottom-space'></div>
					</>
				);
}



export default Home;
