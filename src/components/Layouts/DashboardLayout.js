import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const { data: currentUser = null } = useQuery({
        queryKey: ['currentUser', user?.email],
        queryFn: () => fetch(`https://phone-gallery-server-nu.vercel.app/user/${user?.email}`).then(res => res.json())
    })
    return (
        <div>
            <Navbar />
            <div>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side mr-0 lg:mr-8">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-gray-100 text-base-content">
                            {
                                currentUser?.userType === "Admin" ?
                                    <>
                                        <li><Link to='allBuyers'>All Buyers</Link></li>
                                        <li><Link to='allSellers'>All Sellers</Link></li>
                                        <li><Link to='reportedItems'>Reported Items</Link></li>
                                    </>
                                    :
                                    currentUser?.userType === "Seller" ?
                                        <>
                                            <li><Link to='addProduct'>Add a Product</Link></li>
                                            <li><Link to='myProducts'>My Products</Link></li>
                                        </>
                                        :
                                        <>
                                            <li><Link to='myOrders'>My Orders</Link></li>
                                        </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default DashboardLayout;