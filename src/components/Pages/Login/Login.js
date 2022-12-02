import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const [userEmail, setUserEmail] = useState();

    const onSubmit = data => {
        login(data.email, data.password)
            .then(user => {
                setUserEmail(data.email);
                navigate(from, { replace: true })
                toast.success('Registerd Successfully')
            })
            .catch(err => console.error(err))
    };
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                saveUserToDB(user.displayName, user.email, 'Buyer')
                navigate(from, { replace: true })
                toast('Here is your toast.');
            })
            .catch(err => console.error(err))
    }
    const saveUserToDB = (name, email, userType) => {
        const user = { name, email, userType };
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
                    <h1 className='text-2xl text-center mb-5'>Login</h1>
                    <div className='form-contorl'>
                        <label className='label label-text'>Email</label>
                        <input type='email' className='input input-bordered w-full' {...register("email", { required: true })} />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Password</label>
                        <input type='password' {...register("password", { required: true })} className='input input-bordered w-full' />
                        <label className='label label-text'>Forgot Password ?</label>
                    </div>
                    <div className='form-control mb-3'>
                        <input type="submit" value='Login' className='btn btn-black mt-5' />
                    </div>
                    <p className='text-center'>New to Doctors Portal? <Link className='text-rose-500 underline' to='/register'>Create new Account</Link></p>
                    <div className="divider">OR</div>
                </form>
                <button className='btn w-full bg-white text-accent text-lg font-normal hover:bg-black hover:text-white' onClick={handleGoogleLogin}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;

