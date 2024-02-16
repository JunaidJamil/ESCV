import React from 'react';
import CapacityBuilding from './CapacityBuilding';
import Footer from '../Footer';
import './Phd.css';
import PhdHome from './phdhome';


function Phd () {
    return (
        <div className='phd-page'>
            <CapacityBuilding/>
            <div className='Phd'>
                {/* <h1>Phd</h1>    */}
                <PhdHome/>
            </div>  
            <Footer/>      
        </div>
    );
}

export default Phd;