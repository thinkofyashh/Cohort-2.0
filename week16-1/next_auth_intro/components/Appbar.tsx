"use client"
import { useRouter } from "next/navigation"
import { signIn, signOut } from "next-auth/react";

export default function Appbar(){
   // const router = useRouter()
    return <div>
        <button onClick={()=>{
            signIn()
        }}>Sign in</button>

<button onClick={()=>{
            signOut()
        }}>Log out </button>


    </div>
}