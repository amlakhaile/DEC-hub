import React from 'react'
import logo from '../assets/logo.jpg';
import {  Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='flex h-screen items-center justify-evenly mx-11'>
    <div className='px-11 mx-11 mb-11 pb-11'>
      <img src={logo} alt="Logo" className='w-[60%]'/>
     
    </div>
    <div>
    <form className="bg-white w-[400px] pr-11 pt-6 pb-8 mb-4 mr-11">
        <div className="mb-4">
        <h1 className='pl-[135px] text-[20px] font-bold pb-7  text-gray-700'>DEC HUB</h1>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ID">
            User ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ID"
            type="ID"
            placeholder="ID"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center">
          <Link to="/home"><button
            className="mb-5 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button></Link>
        </div>
        <div className="text-center">
          <span className="mr-1">Don't have an account?</span>
          <Link to="/register" className="text-blue-500 hover:underline">
            Create New Account
          </Link>
        </div>
      </form>
    </div>
    
    
    </div>
  )
}

export default Login
