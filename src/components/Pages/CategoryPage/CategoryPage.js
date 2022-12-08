import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const { id } = useParams()
    const { data: categoryProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['categroyProducts', id],
        queryFn: () => fetch(`http://localhost:4000/category/${id}`).then(res => res.json())
    })
    if (isLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div>
        )
    }

    return (
        <>
            {
                categoryProducts.length > 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 gap-10 p-4'>
                        {categoryProducts.map(product =>
                            <ProductCard
                                key={product._id}
                                product={product}
                                refetch={refetch}
                            >
                            </ProductCard>)}
                    </div>
                    :
                    <div className='h-[600px] flex justify-center items-center'><p className='text-6xl font-bold text-gray-300'>No Products Available</p></div>
            }
        </>
    );
};

export default CategoryPage;