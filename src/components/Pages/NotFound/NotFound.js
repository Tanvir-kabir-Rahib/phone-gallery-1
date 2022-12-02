import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../../assets/notFoundImage.webp'
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-4/5 lg:w-3/5 mx-auto'>
                <img src={img404} alt='' className='w-full'></img>
            </div>
            <div><p className='text-center text-3xl font-semibold'>Return <Link to='/' className='text-amber-400 underline'>Home</Link></p></div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;