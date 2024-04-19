"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";


export const Appbar =()=>{
    const session = useSession();
    const router = useRouter();
    return <div>
        <button
        onClick={()=>{
           signIn();     
        }}
        >Sign In</button>

        <button
        onClick={()=>{
           signOut();     
        }}
        >Sign Out</button>

        {JSON.stringify(session)}
    </div>
}