import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const { id } = useParams()
    const { data: categoryProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['categroyProducts', id],
        queryFn: () => fetch(`http://localhost:4000/category/${id}`).then(res => res.json())
    })
    console.log(categoryProducts)
    if (isLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 gap-10 p-4'>
            {
                categoryProducts.map(product =>
                    <ProductCard
                        key={product._id}
                        product={product}
                        refetch={refetch}
                    >
                    </ProductCard>)
            }
        </div>
    );
};

export default CategoryPage;