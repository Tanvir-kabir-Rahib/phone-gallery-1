import React from 'react';

const AddProduct = () => {
    const handleAddProduct = event => {

    }
    return (
        <div className='flex justify-center items-center' >
            <div className='w-11/12 md:w-3/4 lg:w-8/12 shadow-xl p-10 rounded-xl'>
                <form onSubmit={handleAddProduct}>
                    <h1 className='text-2xl text-center mb-5'>Add a New Product</h1>
                    <div className='form-contorl'>
                        <label className='label label-text'>Product Name</label>
                        <input type='text' className='input input-bordered w-full' name='productName' required />
                    </div>
                    <div className='form-contorl'>
                        <label className='label label-text'>Location</label>
                        <input type='text' className='input input-bordered w-full' name='Location' required/>
                    </div>
                    <div className='form-contorl'>
                        <label className='label label-text'>Seller Number</label>
                        <input type='text' className='input input-bordered w-full' name='sellerNumber' required/>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Original Price</label>
                        <input type='text' name='originalPrice' className='input input-bordered w-full' required/>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Resale Price</label>
                        <input type='text' name='resalePrice' className='input input-bordered w-full' required/>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Years of use</label>
                        <input type='text' name='yearOfUse' className='input input-bordered w-full' required/>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Year of Purchase</label>
                        <input type='text' name='yearOfPurchase' className='input input-bordered w-full' required/>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Condition</label>
                        <select name='condition' className="select w-full bg-zinc-200">
                            <option selected>Fair</option>
                            <option>Good</option>
                            <option>Excellent</option>
                        </select>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Description</label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Product Description"></textarea>
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