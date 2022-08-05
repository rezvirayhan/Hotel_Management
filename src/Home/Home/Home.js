import React from 'react';
import About from '../About/About';
import Carosel from '../Carosel/Carosel';
import Features from '../Features/Features';
import Food from '../Food/Food/Food';
import Foods from '../Food/Foods/Foods';
import Header from '../Header/Header';
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
            <Foods></Foods>
        </div>
    );
};

export default Home;