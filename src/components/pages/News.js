import React from 'react';
import '../../App.css';
import './News.css';
import Footer from '../Footer';

function News () {
    return (
        <>
        <div className='news-and-updates'>
            <h1>NEWS & UPDATES</h1>
        </div>

        <div className='headlines'>
            <div className='news-card'>
                <p>Oct 28, 2023</p>
                <p className='news-headline'>Collaborative Meeting Between NCL-NED Researchers and ATUP Leaders for Language Preservation and Advancement</p>
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
            <div className='news-card'>
                <p>Oct 28, 2023</p>
                <p className='news-headline'>Collaborative Meeting Between NCL-NED Researchers and ATUP Leaders for Language Preservation and Advancement</p>
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
        </div>
        <Footer/>
        </>
    );
}

export default News;