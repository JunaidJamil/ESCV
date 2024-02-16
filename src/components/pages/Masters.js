import React from 'react';
import CapacityBuilding from './CapacityBuilding';
import Footer from '../Footer';
import './Masters.css'
import MSHome from './mshome';

function Masters () {
    return (
        <div className='masters-page'>            
        <CapacityBuilding/>
       
                {/* <h1>Masters</h1> */}
                <MSHome/>
                
            <Footer/>           
        </div>
    );
}

export default Masters;