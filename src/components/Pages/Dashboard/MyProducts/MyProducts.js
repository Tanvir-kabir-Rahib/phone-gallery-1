import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`http://localhost:4000/products?email=$${user?.email}`).then(res => res.json())
    })
    return (
        <div>
            <h1>This is my Products</h1>
        </div>
    );
};

export default MyProducts;