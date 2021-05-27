import React from 'react';
import {
     FiUser,
     FiFile,
     FiInfo,
    } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const HomeLayout = () => {
 
    return (
        <div className='flex'>
            <Link to ='/students'>
                <div className="flex-card">
                    <div className="icon">
                        <FiUser />
                    </div>
                    <div className='text'>Students</div>
                </div>
            </Link>   
            <Link to='/documents'>
                <div className="flex-card">
                    <div className="icon">
                        <FiFile />
                    </div>
                    <div className='text'>Documents</div>
                </div>
            </Link>  
            <Link>
                <div className="flex-card">
                    <div className="icon">
                        <FiInfo />
                    </div>
                    <div className='text'>About</div>
                </div>
            </Link>    
        </div>
    )
}

export default HomeLayout;