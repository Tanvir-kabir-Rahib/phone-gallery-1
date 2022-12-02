import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`http://localhost:4000/category`).then(res => res.json())
    })
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const handleAddProduct = data => {
        const image = data.image[0];
        const productName = data.productName;
        const location = data.location;
        const sellerNumber = data.sellerNumber;
        const originalPrice = data.originalPrice;
        const resalePrice = data.resalePrice;
        const yearOfPurchase = data.yearOfPurchase;
        const yearOfUse = data.yearOfUse;
        const productCategory = data.productCategory;
        const productCategoryId = categories.find(category => category.name === productCategory)._id;
        const condition = data.condition;
        const description = data.description;
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        productName,
                        location,
                        sellerNumber,
                        originalPrice,
                        resalePrice,
                        yearOfUse,
                        yearOfPurchase,
                        productCategory,
                        productCategoryId,
                        condition,
                        description,
                        sellerEmail: user?.email,
                        sellerName: user?.displayName
                    }
                    fetch('http://localhost:4000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            navigate('/dashboard/myProducts')
                            toast.success(`Product is added successfully`);
                        })
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
        <div className='mb-24 flex justify-center items-center' >
            <div className='w-11/12 md:w-3/4 lg:w-8/12 shadow-xl p-10 rounded-xl'>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <h1 className='text-2xl text-center mb-5'>Add a New Product</h1>
                    <div className='form-contorl'>
                        <label className='label label-text'>Product Name</label>
                        <input type='text' className='input input-bordered w-full' {...register("productName")} required />
                    </div>
                    <div className='form-contorl'>
                        <label className='label label-text'>Location</label>
                        <input type='text' className='input input-bordered w-full' {...register("location")} required />
                    </div>
                    <div className='form-contorl'>
                        <label className='label label-text'>Seller Number</label>
                        <input type='text' className='input input-bordered w-full' {...register("sellerNumber")} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Original Price</label>
                        <input type='text' className='input input-bordered w-full' {...register("originalPrice")} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Resale Price</label>
                        <input type='text' className='input input-bordered w-full' {...register("resalePrice")} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Years of use</label>
                        <input type='text' className='input input-bordered w-full' {...register("yearOfUse")} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Year of Purchase</label>
                        <input type='text' className='input input-bordered w-full' {...register("yearOfPurchase")} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Condition</label>
                        <select {...register("condition", {
                            required: true
                        })} className="select w-full bg-zinc-200">
                            <option>Fair</option>
                            <option>Good</option>
                            <option>Excellent</option>
                        </select>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Category</label>
                        <select {...register("productCategory", {
                            required: true
                        })} className="select w-full bg-zinc-200" required>
                            {
                                categories ?
                                    categories.map(category => <option key={category._id}>{category.name}</option>)
                                    :
                                    <></>
                            }
                        </select>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Description</label>
                        <textarea className="textarea textarea-bordered" placeholder="Product Description" {...register("description", {
                            required: true
                        })}></textarea>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Photo</label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='form-control mb-3'>
                        <input type="submit" value='Book Now' className='btn btn-accent mt-5' />
                    </div>
                </form >
            </div >
        </div >
    );
};

export default AddProduct;