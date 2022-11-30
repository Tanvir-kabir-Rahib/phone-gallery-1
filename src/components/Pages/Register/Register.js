import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
 
const Register = () => {
   const { register, handleSubmit } = useForm();

   return (
       <div className='h-[800px] flex justify-center items-center' >
           <div className='w-11/12 md:w-3/4 lg:w-4/12 shadow-xl p-10 rounded-xl'>
               <form onSubmit={handleSubmit()}>
                   <h1 className='text-2xl text-center mb-5'>Register</h1>
                   <div className='form-contorl'>
                       <label className='label label-text'>Name</label>
                       <input type='text' className='input input-bordered w-full' {...register("name", { required: true, maxLength: 20 })} />
                   </div>
                   <div className='form-contorl'>
                       <label className='label label-text'>Email</label>
                       <input type='emafil' className='input input-bordered w-full' {...register("email", { required: true })} />
                   </div>
                   <div className='form-control'>
                       <label className='label label-text'>Password</label>
                       <input type='password' {...register("password", { required: true })} className='input input-bordered w-full' />
                   </div>
                   <div className='form-control mb-3'>
                       <input type="submit" value='Register' className='btn btn-accent mt-5' />
                   </div>
                   <p className='text-center'>Already Have an Account? <Link className='text-rose-500 underline' to='/login'>Please Login</Link></p>
                   <div className="divider">OR</div>
               </form >
               <button className='btn w-full bg-white text-accent text-lg font-normal hover:bg-black hover:text-white' >Continue With Google</button>
           </div >
       </div >
   );
};
 
export default Register;
