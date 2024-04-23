import React from 'react'
import logo from '../assets/logo.jpg';

const Login = () => {
  return (
    <div className='flex h-screen items-center justify-evenly '>
    <div className='px-11 mx-11 mb-11 pb-11'>
      <img src={logo} alt="Logo" className='w-[60%]'/>
     
    </div>
    <div>
    <form className="bg-white w-[400px] pr-11 pt-6 pb-8 mb-4 mr-11">
        <div className="mb-4">
        <h1 className='pl-[135px] text-[20px] font-bold pb-7  text-gray-700'>DEC HUB</h1>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
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
          <button
            className="mb-5 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
        <div className="text-center">
          <span className="mr-1">Don't have an account?</span>
          <a href="#" className="text-blue-500 hover:underline">
            Create New Account
          </a>
        </div>
      </form>
    </div>
    
    
    </div>
  )
}

export default Login
