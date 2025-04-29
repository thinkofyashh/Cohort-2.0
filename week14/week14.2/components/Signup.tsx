"use client"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"



 
export default function Signup(){
    const [username,setUsername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const router =useRouter();

    async function SignupDetails(){
        try{
            const res= await axios.post ("http://localhost:3000/api/user",{
                username,
                password,
                email
            });
            router.push("/")

        }catch(e){
            console.log(e)
        }
    
    
    }

    return <>
     <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Create an Account</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setUsername(e.target.value)
             
              }}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setemail(e.target.value)
              }}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
            />
          </div>
        </div>
  
        <button onClick={SignupDetails}  className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Sign Up
        </button>
      </div>
    
    </>
}


