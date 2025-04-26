import Image from "next/image";
import axios from "axios"


async function getUserDetails(){
  const res= await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return res.data;
}



export default async function Home() {
  const user=await getUserDetails()

  return (
    <>
     <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {user?.name}
                </div>
                
                {user?.email}
            </div>
        </div>
    </div>

    
    </>
  );
}
