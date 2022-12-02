import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const categoryProducts = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 gap-10 p-4'>
            {
                categoryProducts.map(product => 
                <ProductCard 
                key={product._id} 
                product={product}
                >
                </ProductCard>)
            }
        </div>
    );
};

export default CategoryPage;