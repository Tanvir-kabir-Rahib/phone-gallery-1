import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BuyingModal = ({ modal, refetch, setModal }) => {
    const { user } = useContext(AuthContext)
    console.log(modal)
    const handleBookingSubmit = (event) => {
        event.preventDefault()
        modal.bookId = modal?._id
        modal.buyerEmail = user?.email;
        delete modal._id;
        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(modal)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`Product Added to My Orders`);
            })
        fetch(`http://localhost:4000/advertise?id=${modal?.bookId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                }
            })
        fetch(`http://localhost:4000/products?id=${modal?.bookId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                }
                else {
                    refetch()
                }
            })
        setModal(null)
    }
    return (
        <div>
            <input type="checkbox" id={`my-modal-${modal?._id}`} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleBookingSubmit} className="modal-box grid gap-5">
                    <div className='flex mb-6'>
                        <label htmlFor={`my-modal-${modal?._id}`} className="btn btn-sm btn-circle absolute right-3 top-3 text-xl"><FaTimes></FaTimes></label>
                        <h3 className="text-xl font-semibold">{modal?.productName}</h3>
                    </div>
                    <input name='userName' type="text" placeholder="Full Name" className="input input-bordered w-full" defaultValue={user?.displayName} readOnly />
                    <input name='productName' type="text" placeholder="Product Name" className="input input-bordered w-full" defaultValue={modal?.productName} readOnly />
                    <input name='productPrice' type="text" placeholder="Product Price" className="input input-bordered w-full" defaultValue={modal?.resalePrice} readOnly />
                    <input name='email' type="email" placeholder="Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                    <input name='meetLocation' type="text" placeholder="Meeting Location" className="input input-bordered w-full" required />
                    <input name='phoneNumber' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                    <div className="mt-4">
                        <input type='submit' className="btn w-full bg-accent"></input>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default BuyingModal;