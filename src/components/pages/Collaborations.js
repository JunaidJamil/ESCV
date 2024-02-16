import React from 'react';
import '../../App.css';
import './Collaborations.css';  
import Footer from '../Footer';


import collab0 from '../../images/collab0.png';
import collab1 from '../../images/collab1.png';
import collab2 from '../../images/collab2.png';
import collab3 from '../../images/collab3.png';

function Collaborations () {
    return (
        <>
            <div className='collaborators-heading'>
                <h1>Collaborations</h1>   
            </div>


            <div className='collaborators'>
                <h2>Lab Associations</h2>
                <hr></hr>
                <img src={collab0} className='collab0'></img>
                <h2>National Collaborations</h2>
                <hr></hr>
                <img src={collab1}></img>

                <h2>International Collaborations</h2>
                <hr></hr>
                <img src={collab2}></img>

                <h2>Industrial Collaborations</h2>
                <hr></hr>
                <img src={collab3}></img>

            </div>
            <Footer/>

        </>
    );
}

export default Collaborations;