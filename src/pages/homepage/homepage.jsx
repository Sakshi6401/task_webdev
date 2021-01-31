import React from 'react';
import TopDisplay from '../../components/topdisplay/topdisplay.component';
import BottomDisplay from '../../components/bottomdisplay/bottomdisplay.component';
import './homepage.css';

const HomePage = () => (
    <div className='homepage'>
        <TopDisplay />
        <hr/>
        <BottomDisplay />
    </div>
);

export default HomePage;