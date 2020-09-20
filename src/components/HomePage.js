import React from 'react';
import { Button } from './Button';
import '../App.css'
import './HomePage.css';



function HomePage() {
    return (
        <div className='home-container'>
            <h1 >Tourism</h1>
            <p>Tours and Travels</p>
            
                <Button className='btn' buttonStyle='btn--outline'>Our History</Button>
            
            
        </div>
    )
}

export default HomePage
