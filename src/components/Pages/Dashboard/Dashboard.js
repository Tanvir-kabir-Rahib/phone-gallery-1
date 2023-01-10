import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import AddProduct from './AddProduct/AddProduct';
import AllSellers from './AllSellers/AllSellers';
import MyOrders from './MyOrders/MyOrders';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { data: currentUser = null } = useQuery({
        queryKey: ['currentUser', user?.email],
        queryFn: () => fetch(`https://phone-gallery-server-nu.vercel.app/user/${user?.email}`).then(res => res.json())
    })
    return (
        <div>
            {
                currentUser?.userType === "Admin" ?
                    <>
                        <AllSellers></AllSellers>
                    </>
                    :
                    currentUser?.userType === "Seller" ?
                        <>
                            <AddProduct></AddProduct>
                        </>
                        :
                        <>
                            <MyOrders></MyOrders>
                        </>
            }
        </div>
        // <div className='h-[600px] flex justify-center items-center'><p className='text-4xl md:text-6xl lg:text-8xl font-bold text-gray-300'>Your Dashboard</p></div>
    );
};

            export default Dashboard;