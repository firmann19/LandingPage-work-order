/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import completeImg from '../assets/image/complete-img.png'

function CompleteOrder() {
  return (
    <div id="loginPage" className="h-screen">
     <img
              src={completeImg}
              alt="complete illustration image."
              className='mx-auto py-5'
            />
      <h2 className='font-Philosopher font-bold text-4xl text-primary md:text-6xl lg:text-4xl text-center mb-3'>Complete Order</h2>
      <p className='font-Quicksand mt-2 mb-4 md:text-lg lg:text-base text-center'>Report Completed, Thank you for using the WORK ORDER with pleasure we will serve you </p>
      <Link href='/'><button type="button" className="btn btn-primary position-absolute start-50 translate-middle-x">My Dashboard</button></Link>
    </div>
  )
}

export default CompleteOrder