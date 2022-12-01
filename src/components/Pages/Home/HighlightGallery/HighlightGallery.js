import React from 'react';
import img1 from '../../../../assets/basic2ImgGallery.jpeg'
import img2 from '../../../../assets/android3ImgGallery.webp'
import img3 from '../../../../assets/iphoneImgGallery.jpeg'
import img4 from '../../../../assets/android2ImgGallery.webp'
import img5 from '../../../../assets/basic3ImgGallery.jpeg'
import img6 from '../../../../assets/android5ImgGallery.jpeg'


const HighlightGallery = () => {
    return (
        <div className='my-36'>
            <h1 className='mt-12 mb-2 text-center text-5xl font-semibold'>Gallery</h1>
            <p className='text-center'>Expore some of our photos.</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 p-8 md:p-12 lg:p-28'>
                <div className='col-span-2'><img className='w-full rounded-md' src={img1} alt=""></img></div>
                <div><img className='w-full h-full rounded-md' src={img2} alt=""></img></div>
                <div><img className='w-full h-full rounded-md' src={img3} alt=""></img></div>
                <div><img className='w-full h-full rounded-md' src={img4} alt=""></img></div>
                <div><img className='w-full h-full rounded-md' src={img5} alt=""></img></div>
                <div className='col-span-2'><img className='w-full rounded-md' src={img6} alt=""></img></div>
            </div>
        </div>
    );
};

export default HighlightGallery;