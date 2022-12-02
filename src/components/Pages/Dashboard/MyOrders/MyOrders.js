import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`http://localhost:4000/Orders?email=${user?.email}`).then(res => res.json())
    })

    if (isLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div>
        )
    }

    return (
        <div>
            <h1>This is my Orders</h1>
        </div>
    );
};

export default MyOrders;