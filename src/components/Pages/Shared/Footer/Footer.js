import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='mt-32 mb-10 ml-8 md:ml-0'>
            <div className="footer">
                <div className='md:mx-auto'>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Phone Setup</Link>
                    <Link to='/' className="link link-hover">Battery Checkup</Link>
                    <Link to='/' className="link link-hover">Phone Resell</Link>
                </div>
                <div className='md:mx-auto'>
                    <span className="footer-title">Shop and Learn</span>
                    <Link to='/' className="link link-hover">Iphone</Link>
                    <Link to='/' className="link link-hover">Android Phone</Link>
                    <Link to='/' className="link link-hover">Basic Phone</Link>
                </div>
                <div className='md:mx-auto'>
                    <span className="footer-title">Our Address</span>
                    <Link className="link link-hover">Gilatala - Jahanabad Cant</Link>
                </div>
            </div>
            <div className='text-center mt-14'>
                <p>Copyright © 2022 - All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;