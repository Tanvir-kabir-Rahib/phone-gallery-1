import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`http://localhost:4000/products?email=${user?.email}`).then(res => res.json())
    })

    

if (isLoading) {
    return (
        <div className='mt-16 flex items-center justify-center'>
            <button className="btn loading">loading</button>
        </div>
    )
}

return (
    <div className='grid grid-cols-1 md:grid-cosl-2 lg:grid-cols-3 gap-8 px-4 my-24'>
        {
            myProducts.length > 0 ?
                myProducts.map(product => <MyProductCard
                    key={product._id}
                    product={product}
                    refetch = {refetch}
                ></MyProductCard>)
                :
                <div className='h-[600px] flex justify-center items-center'>
                    <p className='text-6xl font-bold text-gray-300'>No Products</p>
                </div>
        }
    </div>
);
};

export default MyProducts;