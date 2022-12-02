import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useSeller from '../Hooks/useSeller';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();
    console.log(isSeller)

    if (loading || isSellerLoading) {
        return (
            <div className='mt-16 flex items-center justify-center'>
                <button className="btn loading">loading</button>
            </div> 
        )
    }
    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;