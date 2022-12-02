import React from 'react';
import img404 from '../../../assets/notFoundImage.webp'
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-4/5 lg:w-3/5 mx-auto'>
                <img src={img404} alt='' className='w-full'></img>
            </div>
        </div>
    );
};

export default NotFound;