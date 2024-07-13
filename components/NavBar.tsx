"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NavBar = () => {
   // Ensure this is dynamically set based on actual login status
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const setUserProviders = async () => {
      const response = await getProviders();
      //@ts-ignore
      setProviders(response);
    };
    setUserProviders();
  }, []);
 //@ts-ignore
  const handleSignIn = (param)=>{
    signIn(param,{callbackUrl:'/Completed'})
     
  }
  const handleSignOut = ()=>{
    signOut({ callbackUrl: '/' })
     
  }

  return (
    <div className="flex justify-between m-5">
      <div className="flex ml-10 gap-4">
        <Link href={"/"}>
          <Image src={"/todo.png"} alt="Todo Icon" width={60} height={50} />
        </Link>
        <p className="text-white text-2xl font-serif pt-4">Todo</p>
      </div>
      <div className="flex gap-5">
        {session?.user ? (
          <div className="flex items-center gap-3">
            <Image
              src={session?.user?.image || "/next.svg"}
              alt="profile img"
              width={40}
              height={40}
              className="rounded-full"
            />
            <button
              onClick={() => handleSignOut()}
              className="border rounded-md p-1 text-white hover:bg-green-600 hover:text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            {providers &&
              Object.values(providers).map((provider:any) => (
                <div className="flex gap-2" key={provider.name}>
                  <button
                    onClick={() => handleSignIn(provider.id)}
                    className="border rounded-md p-1 text-white hover:bg-green-600 hover:text-white"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => signIn()}
                    className="border rounded-md p-1 text-white hover:bg-green-600 hover:text-white"
                  >
                    Login
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
