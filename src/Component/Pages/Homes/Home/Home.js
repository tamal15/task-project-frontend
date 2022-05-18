import React from 'react';
import Footer from '../Footer/Footer';
import HomePage from '../HomePage/HomePage';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomePage></HomePage>
            <Footer></Footer>
        </div>
    );
};

export default Home;