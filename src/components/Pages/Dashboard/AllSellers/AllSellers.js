import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: allSellers = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`http://localhost:4000/users/sellers`).then(res => res.json())
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.length > 0 ?
                                allSellers.map((seller,idx) => <tr key={seller?._id} className="hover">
                                    <th>{idx+1}</th>
                                    <td>{seller?.name}</td>
                                    <td>{seller?.email}</td>
                                    <td><button className="btn btn-outline btn-warning rounded-lg">Delete</button></td>
                                </tr>)
                            :
                            <div className='h-[600px] flex justify-center items-center'>
                                <p className='text-6xl font-bold text-gray-300'>No Sellers</p>
                            </div>
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;