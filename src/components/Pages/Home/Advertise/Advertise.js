import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from '../../CategoryPage/ProductCard/ProductCard';

const Advertise = () => {
    const { data: advertise = [], isLoading, refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: () => fetch(`http://localhost:4000/advertise`).then(res => res.json())
    })

    if (isLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div>
        )
    }

    return (
        advertise.length > 0 &&
        <div className='mt-32'>
            <h1 className='text-center text-5xl font-semibold'>Advertised Products</h1>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
                {
                    advertise.map(product => <ProductCard refetch={refetch} key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Advertise;