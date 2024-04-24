import React from 'react'
import logo from '../assets/logo.jpg';
import { Link } from "react-router-dom";

const Register = () => {
  return (

    <div className='flex h-screen items-center justify-evenly '>   
        
      <div className="bg-white w-[400px] mx-auto p-11">
      <div className="mb-7 pl-[96px]"><img src={logo} alt="Logo" className='w-[120px]'/></div> 
      
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          Register
        </button>
        <div className="text-center ">
          <span className="mr-1">Already have an account?</span>
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </form>
    
   
 
    </div>
   
     
    </div>
 

  )
}

export default Register
