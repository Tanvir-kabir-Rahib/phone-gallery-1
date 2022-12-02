import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';

const CategoryPage = () => {
    const categoryProducts = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-32 gap-12'>
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