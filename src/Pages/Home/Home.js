import React from 'react';
import Benner from '../../Components/Benner/Benner';
import Footer from '../../Components/Footer/Footer';
import TopBar from '../../Components/TopBar/TopBar';
import Works from '../../Components/Works/Works';

const Home = () => {
    return (
        <div >
            <TopBar></TopBar>
            <Benner></Benner>
            <Works></Works>
            <Footer></Footer>
        </div>
    );
};

export default Home;