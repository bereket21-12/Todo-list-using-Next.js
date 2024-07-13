// "use client"
// import {SessionProvider} from "next-auth/react"

// // @ts-ignore
// const Provider = ({children , session}) => {
//   return (
//     <SessionProvider session ={session}>
//     {children}    
//     </SessionProvider>
//   )
// }

// export default Provider
"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const { data: session } = useSession();
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Provider;
