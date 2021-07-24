import React from 'react';
import {Link} from 'react-router-dom';



function Header(){
    return(
        <div className="bg-black text-white flex flex-row justify-between items-center p-4">
            <h2 className="font-extrabold text-xl">DevOnlyBlogs</h2>
            <div className="text-sm">
                <Link to="/login" className="text-center mx-2 hover:text-blue-500">Login</Link>
                <Link to="/register" className="text-center border-blue-500 border-2 px-4 py-1 hover:bg-blue-500">Sign up</Link>
            </div>
        </div>
    )
}

export default Header;