import React from 'react';
import About from '../About/About';
import Carosel from '../Carosel/Carosel';
import Features from '../Features/Features';
import Summer from '../Hotel Offers/Summer/Summer';
import Relaxation from '../Relaxation/Relaxation';
import TMentors from '../TMentors/TMentors';

const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <About></About>
            <Features></Features>
            <TMentors></TMentors>
            <Relaxation></Relaxation>
            <Summer></Summer>
        </div>
    );
};

export default Home;