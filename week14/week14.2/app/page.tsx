import axios from "axios"
import { PrismaClient } from '@prisma/client';
import {client} from "@/db"
//const client = new PrismaClient()

async function getUserDetails(){
 // const res= await axios.get("http://localhost:3000/api/user")
 const res=await client.user.findFirst({});
 return {
  username:res?.username,
  email:res?.email
 }

  
}

export default async function Home() {
  const user=await getUserDetails()

  return (
    <>
     <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {user?.username}
                </div>
                
                {user?.email}
                
            </div>
        </div>
    </div> 
    </>
  );
}
