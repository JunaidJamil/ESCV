import React from 'react';
import '../../App.css';
import './Publications.css';
import Footer from '../Footer';
import PublicView from '../Public/PublicView';

function Publications () {
    return (
        <>
            <div className='publications'>
                <h1>Publications</h1> 
            </div> 

              <PublicView/>



            <Footer/>       
        </>
    );
}

export default Publications;