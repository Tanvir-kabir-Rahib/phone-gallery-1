import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import placeholderImg from '../../../../assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['myOrders'],
        queryFn: () => fetch(`http://localhost:4000/orders?email=${user?.email}`).then(res => res.json())
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
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Resale Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.length > 0 ?
                                myOrders.map(order =>
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={order.image ? order.image : placeholderImg} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{order.productName}</div>
                                                    <div className="text-sm opacity-50">{order.location}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {order.sellerEmail}
                                        </td>
                                        <td>{order.resalePrice}</td>
                                        <th>
                                            <button className="btn btn-outline btn-success rounded-xl">Pay</button>
                                        </th>
                                    </tr>
                                )
                                :
                                <div className='h-[600px] flex justify-center items-center'>
                                    <p className='text-6xl font-bold text-gray-300'>No Orders</p>
                                </div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;