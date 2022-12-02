import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: allSellers = [], isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: () => fetch(`http://localhost:4000/users/sellers`).then(res => res.json())
    })

    const handleDeleteSeller = (seller) => {
        fetch(`http://localhost:4000/users?email=${seller?.email}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${seller.name} deleted successfully`)
                }
            })
    }

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers.length > 0 ?
                                allSellers.map((seller, idx) => <tr key={seller?._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{seller?.name}</td>
                                    <td>{seller?.email}</td>
                                    <td><button className="btn btn-outline btn-info rounded-lg">Verify</button></td>
                                    <td><button onClick={()=>handleDeleteSeller(seller)} className="btn btn-outline btn-warning rounded-lg">Delete</button></td>
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