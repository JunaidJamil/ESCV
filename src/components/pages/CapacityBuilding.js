import React from 'react';
import '../../App.css';
import './CapacityBuilding.css';
import Footer from '../Footer';
import { Link } from 'react-router-dom';



function CapacityBuilding () {
    return (
        <>
            <div className='capacity-building'>
                <h1>CAPACITY BUILDING</h1>  
                <ul>
                    <li>
                        <Link to='/phd' className='capacity-building-links phd-link'>
                            PHD
                        </Link>
                    </li>    
                    <li>
                        <Link to='/masters' className='capacity-building-links masters-link'>
                        Masters
                        </Link>
                    </li>    
                    <li>
                    <Link to='/ras' className='capacity-building-links ras-link' >
                        RAs
                        </Link>                    
                    </li>  

                    <li>
                    <Link to='/fydp' className='capacity-building-links fydp-link'>
                        FYDP
                        </Link>
                    </li>  

                    <li>
                    <Link to='/interns' className='capacity-building-links interns-link'>
                        Interns
                        </Link>                        
                    </li>    
                </ul> 
            </div>
         

        </>
    );
}

export default CapacityBuilding;