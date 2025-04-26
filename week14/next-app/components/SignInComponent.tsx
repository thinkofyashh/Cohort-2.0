import React from "react";
export  const  SignInComponent=()=>{
    return  <>
    <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="w-80 bg-white rounded-xl shadow p-6">
          <h2 className="text-3xl font-bold text-center mb-6">Sign in</h2>
          <LabelledInput label="Username" placeholder="harkirat@gmail.com" />
          <LabelledInput label="Password" type="password" placeholder="123456" />
          <button
            type="button"
            className="mt-6 w-full bg-gray-900 text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign in
          </button>
        </div>
      </div>
    
    </>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
  }
  
  function LabelledInput({ label, placeholder, type = "text" }: LabelledInputType) {
    return (
      <div className="mb-4">
        <label className="block text-sm font-semibold text-black mb-2">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          required
        />
      </div>
    );
  }
  