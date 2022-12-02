import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import AddProduct from './AddProduct/AddProduct';
import AllSellers from './AllSellers/AllSellers';
import MyOrders from './MyOrders/MyOrders';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    console.log(isSeller)
    if (isAdmin) {
        return <AllSellers></AllSellers>
    }
    else if (isSeller) {
        return <AddProduct></AddProduct>
    }
    else {
        return (
            <MyOrders></MyOrders>
        );
    }
};

export default Dashboard;