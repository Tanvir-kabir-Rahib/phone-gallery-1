import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import HighlightGallery from '../HighlightGallery/HighlightGallery';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <HighlightGallery/>
        </div>
    );
};

export default HomePage;