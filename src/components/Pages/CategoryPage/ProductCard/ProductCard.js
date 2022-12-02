import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import placeholderImg from '../../../../assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'

const ProductCard = ({product}) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={product.image ? product.image : placeholderImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p>Product Location: {product.location? product.location : 'Unavailable'}</p>
                <p>Resale Price: ${product.resalePrice}</p>
                <p>Original Price: ${product.originalPrice}</p>
                <p>Year of Use: {product.yearOfUse ? product.yearOfUse : 'Unavailable'}</p>
                <p>Seller: {product.sellerName?product.sellerName:'Unavailable'}{product.varify==="varified"&&<FaCheckCircle className='text-sky-500'></FaCheckCircle>}</p>
                <p>Post Time: {product.time  ? product.time : "The post time is unavailable"}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary rounded-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;