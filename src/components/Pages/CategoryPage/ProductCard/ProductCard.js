import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import placeholderImg from '../../../../assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
import BuyingModal from '../../../BuyingModal/BuyingModal';

const ProductCard = ({ product, refetch }) => {
    const [modal, setModal] = useState(null);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='max-h-96'><img src={product.image ? product.image : placeholderImg} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p>Product Location: {product.location ? product.location : 'Unavailable'}</p>
                <p>Resale Price: ${product.resalePrice}</p>
                <p>Original Price: ${product.originalPrice}</p>
                <p>Year of Use: {product.yearOfUse ? product.yearOfUse : 'Unavailable'}</p>
                <p>Seller: {product.sellerName ? product.sellerName : 'Unavailable'}{product.varify === "varified" && <FaCheckCircle className='text-sky-500'></FaCheckCircle>}</p>
                <p>Post Time: {product.time ? product.time : "The post time is unavailable"}</p>
                <div className="card-actions justify-end">
                    <label className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white font-semibold" htmlFor={`my-modal-${product._id}`}>Buy Now</label>
                </div>
            </div>
            {
                modal &&
                <BuyingModal setModal={setModal} refetch={refetch} product={product}></BuyingModal>}
        </div>
    );
};
export default ProductCard;