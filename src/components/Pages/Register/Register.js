import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, googleLogin, updateUser } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate();
    const handleRegisterSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userType = form.userType.value;
        createUser(email, password)
            .then(user => {
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUserToDB(name, email, userType)
                        navigate('/')
                        toast.success('Registerd Successfully')
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    };
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                saveUserToDB(user.displayName, user.email, 'Buyer');
                navigate('/');
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
                <form onSubmit={handleRegisterSubmit}>
                    <h1 className='text-2xl text-center mb-5'>Register</h1>
                    <div className='form-contorl'>
                        <label className='label label-text'>Name</label>
                        <input type='text' className='input input-bordered w-full' name='name' required />
                    </div>
                    <div className='form-contorl'>
                        <label className='label label-text'>Email</label>
                        <input type='email' className='input input-bordered w-full' name='email' required/>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Password</label>
                        <input type='password' name='password' className='input input-bordered w-full' required/>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>User Type</label>
                        <select name='userType' className="select w-full bg-zinc-200">
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
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
