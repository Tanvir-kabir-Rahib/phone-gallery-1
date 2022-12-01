import React from 'react';
import banner from '../../../../assets/bannerPhoneGallery.webp';

const Banner = () => {
    return (
        <div className="hero mt-12 lg:mt-32 px-4 md:px-12">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
                <img src={banner} className="rounded-lg shadow-2xl w-11/12  lg:w-1/2" alt=''/>
                <div className='w-11/12 mr-0 lg:mr-8 mt-10 lg:mt-0 lg:w-1/2'>
                    <h1 className="text-4xl lg:text-5xl font-bold">Get Your Best Deal With Phone Gallery</h1>
                    <p className="py-6">Get your desired phone with the most resonable price in best condition and the best configuration.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;