import React from 'react';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HighlightGallery from '../HighlightGallery/HighlightGallery';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <Advertise></Advertise>
            <HighlightGallery/>
        </div>
    );
};

export default HomePage;