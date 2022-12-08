import React from 'react';
import toast from 'react-hot-toast';
import placeholderImg from '../../../../assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

const MyProductCard = ({ product, refetch }) => {
    const handleAddAdvertise = (product) => {
        fetch(`http://localhost:4000/products/${product._id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`Product Advertised`);
            })
    }
    const handleDelete = (id) => {
        fetch(`http://localhost:4000/products?id=${product._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product deleted successfully`)
                }
            })
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='max-h-[152px] min-h-[152px]' src={product.image ? product.image : placeholderImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>Product Location: {product.location}</p>
                    <p>Resale Price: ${product.resalePrice}</p>
                    <p>Original Price: ${product.originalPrice}</p>
                    <p>Year of Use: {product.yearOfUse}</p>
                    <p>Post Time: {product.time ? product.time : "The post time is unavailable"}</p>
                    <div className="card-actions justify-between mt-6">
                        <button onClick={() => handleAddAdvertise(product)} className="btn btn-success rounded-lg">Advertise</button>
                        <button onClick={() => handleDelete(product?._id)} className="btn btn-warning rounded-lg">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;