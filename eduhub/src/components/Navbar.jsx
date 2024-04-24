import React from 'react'
import logo from '../assets/logo.jpg';
import { CgProfile } from "react-icons/cg";
 

const Navbar = () => {
  return (
    <div className='flex justify-evenly'>
        <div>
        <img src={logo} alt="Logo" className='w-[100px]'/>

        </div>
        <div>
            <ul className='flex pt-11'>
                <a href="#"><li className='px-7'>Home</li></a>
                <a href="#"><li className='px-7'>Apps</li></a>
                <a href="#"><li className='px-7'>Notifications</li></a> 
            </ul>
        </div>
        <div className='flex text-2xl'>
            <ul className='flex pt-11'>
                <li className='pt-1'><CgProfile /></li>
                <a href=""><li className='pl-1 text-[20px]'>Haileamlak</li></a>
            </ul>
           
        </div>
      
    </div>
  )
}

export default Navbar
