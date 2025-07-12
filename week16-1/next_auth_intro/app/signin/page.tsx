'use client'
import { signIn } from "next-auth/react"
import {  useRouter } from "next/navigation"

export default function Signin (){
const router= useRouter();
    return <div>

        <button onClick={async()=>{
            await signIn('google')
        }}>
            Sign in with google 
        </button>
        <button onClick={async()=>{
            await signIn('github')
        }}>
            Sign in with github
        </button>
        <button onClick={async()=>{
            const res =await signIn('credentials',{
                email:"",
                password:"",
                redirect:false

            }
        )
        console.log(res)
        router.push("/")
        }}>Login with Email </button>



    </div>

}