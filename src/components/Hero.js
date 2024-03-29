import React from 'react';
import sdgs from './sdgs.png';
import bg1 from '../images/bg1.png'
import './Hero.css';
import WordFade from './Transition';

import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
            
            <div className='hero-container'>
                <WordFade/>
                <img className = 'bg-home' src={bg1}></img>
                <div className='bg-img-text'>
                    <p>
                        INNOVATING VISION,<br></br>
                        TRANSFORMING SYSTEMS
                    </p>

                </div>
            </div>

            <div className='hero-main'>

                <div className='col1'>

                    <div className='about-us'>
                        <h1>WELCOME TO ESCV LAB</h1>
                        <p>In the ESCV Research Lab, where cutting-edge technology meets practical innovation. This lab serves as a dynamic hub for students and researchers to explore the seamless integration of embedded systems and computer vision, two pivotal fields in the realm of modern technology.Here, we seamlessly integrate hardware and software to engineer solutions that elevate automation, perception, and interactivity across various applications, from autonomous vehicles to cutting-edge healthcare devices. At the intersection of embedded systems and computer vision, we explore boundless potential, contributing to the future of technology.</p>
                        <Link to='about-page'><p>About the lab</p></Link>
                    </div>


                    <div>
                    <h1>FOCUSED AREAS</h1>
                    <img className='sdgs' src={sdgs}></img>    
                    </div>

                </div>
                

                <div className='col2'>

                    <div className='news'>
                        <h1>NEWS AND UPDATES</h1>

                        <div className='news-container'>
                            <div className='news-card'>
                                <p>Oct 28, 2023</p>
                                <a target='_blank' href='https://www.google.com' rel='noreferrer'>
                                    <p className='news-headline'>Collaborative Meeting Between NCL-NED Researchers and ATUP Leaders for Language Preservation and Advancement</p>
                                </a>
                            </div>

                            <hr></hr>
                            <div className='news-card'>
                                <p>Oct 21, 2023</p>
                                <p className='news-headline'>Successful STEAM Workshop Fusion Sparks Innovation and Inspiration at NED University</p>
                            </div>
                            <hr></hr>
                            <div className='news-card'>
                                <p>Sep 7, 2023</p>
                                <p className='news-headline'>Notice for venue of the session</p>
                            </div>
                            <hr></hr>
                            <div className='news-card'>
                                <p>Sep 7, 2023</p>
                                <p className='news-headline'>NCL - NED Launches 'Console': Revolutionary Industrial Inspection System for Quality Assurance</p>
                            </div>
                            <hr></hr>
                            <Link to='news'>
                                <p className='view-more'>View more</p>
                            </Link>
                            

                        </div>
                    </div>


                    <div className='check-out'>
                        <h1>CHECK OUT OUR</h1>
                        <Link to='./honors-and-achievements'><p>#Achievements</p></Link>
                        <Link to='./products'><p>#Products</p></Link>
                        <Link to='./collaborations'><p>#Collaborations</p></Link>
                    </div>

                </div>
            </div>


            

    
</>
    );
}

export default Hero;