import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`https://phone-gallery-server-nu.vercel.app/category`).then(res => res.json())
    })

    if (isLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div>
        )
    }

    return (
        <div className='mt-32'>
            <div className='mb-16'>
                <h2 className='mt-12 mb-2 text-center text-5xl font-semibold'>Phone Categories</h2>
                <p className='text-center'>Explore the Phones of Different Calegories</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8'>
                {
                    categories.map(category =>
                        <Link to={`category/${category._id}`} key={category._id} className="card card-compact bg-base-100 shadow-xl flex-row items-center justify-center rounded-xl min-h-[150px] max-h-[150px] md:min-h-[200px] md:max-h-[200px]">
                            <figure className='w-2/5'><img className='w-full' src={category.imgURL} alt="" /></figure>
                            <div className="card-body w-3/5">
                                <h2 className="card-title text-3xl">{category.name}</h2>
                            </div>
                        </Link>)
                }
            </div>
        </div>
    );
};

export default Categories;