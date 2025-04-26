"use client"
export const  Button =()=>{
    return (

        <button
            type="button"
            onClick={()=>{
              console.log("button is clicked ")
            }}
            className="mt-6 w-full bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign in
          </button>

    )
}