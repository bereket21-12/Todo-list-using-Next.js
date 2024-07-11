import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='flex justify-between m-5'>

            <div className='flex ml-10 gap-4'>
                <Link href={"/"}>
                   <Image
                   src={'/todo.png'}
                   alt='Todo Icon'
                   width={60}
                   height={50}
                   />

                </Link>
                <p className=' text-white text-2xl font-serif pt-4' >Todo</p>

            </div>
            <div className='flex gap-5'>
                <button className='border rounded-md p-1 text-white hover:bg-green-600 hover:text-white'>
                    SignUp
                </button>
                <button className='border rounded-md p-1 text-white hover:bg-green-600 hover:text-white'>
                    Login
                </button>
    
            </div>

      </div>
  );
};

export default NavBar;
