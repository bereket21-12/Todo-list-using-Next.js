import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className='flex justify-between m-5'>

            <div className='flex ml-10 gap-4'>
                <Link className='border rounded-md p-1 hover:bg-green-600 hover:text-white' href={"/"}>
                    Home

                </Link>
                <Link className='border rounded-md p-1 hover:bg-green-600 hover:text-white'href={"/"}>>
                    Done
                </Link>
                 <Link className='border rounded-md p-1 hover:bg-green-600 hover:text-white'href={"/"} >
                    Undone
                </Link>
            </div>
            <div className='flex gap-5'>
                <button className='border rounded-md p-1 hover:bg-green-600 hover:text-white'>
                    SignUp
                </button>
                <button className='border rounded-md p-1 hover:bg-green-600 hover:text-white'>
                    Login
                </button>
    
            </div>

      </div>
  );
};

export default NavBar;
