import React from 'react';
import toast from 'react-hot-toast';
import placeholderImg from '../../../../assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

const MyProductCard = ({ product }) => {
    const handleAddAdvertise = (product) => {
        delete product._id;
        fetch('http://localhost:4000/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`Product Advertised`);
            })
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={product.image ? product.image : placeholderImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.productName}</h2>
                    <p>Product Location: {product.location}</p>
                    <p>Resale Price: ${product.resalePrice}</p>
                    <p>Original Price: ${product.originalPrice}</p>
                    <p>Year of Use: {product.yearOfUse}</p>
                    <p>Post Time: {product.time ? product.time : "The post time is unavailable"}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddAdvertise(product)} className="btn btn-primary rounded-lg">Advertise</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;