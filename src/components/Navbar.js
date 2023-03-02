import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/logo-HTA.png'

function Navbar() {
  return (
    <nav className='flex justify-between py-2 px-6 items-center bg-slate-300'>
    <div>
        <Link to="/"><img src={Logo} alt="HTA" className='w-1/6' /></Link>
    </div>
    <div className='flex gap-6 items-center'>
        <ul className='flex gap-6 font-medium text-l cursor-pointer'>
            <Link to="/" className='hover:text-secondary-color text-black text-decoration-none'>Home</Link>
            <Link to="/course" className='hover:text-secondary-color text-black text-decoration-none'>Course</Link>
            <Link to="/services" className='hover:text-secondary-color text-black text-decoration-none'>Services</Link>
            <Link to="/portofolio" className='hover:text-secondary-color text-black text-decoration-none'>Portofolio</Link>
            <Link to="/contactus" className='hover:text-secondary-color text-black text-decoration-none'>Contact Us</Link>
        </ul>
        <Link to="login"><button className='w-28 h-11 rounded-full text-l font-medium bg-danger text-white'>Login</button></Link>
        <Link to="register" ><button className='w-28 h-11 rounded-full text-l font-medium bg-white'>Register</button></Link>
    </div>
</nav >
  )
}

export default Navbar