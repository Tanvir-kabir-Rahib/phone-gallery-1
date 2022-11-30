import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
 
const Register = () => {
   const { register, handleSubmit } = useForm();
   const { createUser, googleLogin, updateUser } = useContext(AuthContext)
   const [userEmail, setUserEmail] = useState(null);
   const navigate = useNavigate();
   const onSubmit = data => {
       createUser(data.email, data.password)
           .then(user => {
               const userInfo = {
                   displayName: data.name
               }
               updateUser(userInfo)
                   .then(() => {
                       saveUserToDB(data.name, data.email)
                   })
                   .catch(err => console.error(err))
           })
           .catch(err => console.error(err))
   };
   const handleGoogleLogin = () => {
       googleLogin()
           .then(result => {
               const user = result.user
               saveUserToDB(user.displayName, user.email)
           })
           .catch(err => console.error(err))
   }
   const saveUserToDB = (name, email) => {
       const user = { name, email };
       fetch('http://localhost:4000/users', {
           method: 'post',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(user)
       })
           .then(res => res.json())
           .then(data => {
               setUserEmail(user.email)
           })
   }
   return (
       <div className='h-[800px] flex justify-center items-center' >
           <div className='w-11/12 md:w-3/4 lg:w-4/12 shadow-xl p-10 rounded-xl'>
               <form onSubmit={handleSubmit(onSubmit)}>
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
               <button className='btn w-full bg-white text-accent text-lg font-normal hover:bg-black hover:text-white' onClick={handleGoogleLogin}>Continue With Google</button>
           </div >
       </div >
   );
};
 
export default Register;
