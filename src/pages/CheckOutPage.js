import React from 'react';
import ImgCheckout from '../assets/image/img-checkout.png';
import CheckOutInput from '../components/CheckOutInput';
import Navigation from '../components/Navigation';

function CheckOutPage() {
  return (
    <>
    <Navigation />
    <div className="responsive-form-checkout">
    <div id="checkoutPage" className="h-screen">
        <div className='flex flex-row py-5 px-5'>
      <div className='img-checkout'>
         <img src={ImgCheckout} className='' alt='img-checkout' height="" width="" />
      </div>
      
      <div className='w-1/2'>
        <h2 className='font-Philosopher font-bold text-4xl md:text-6xl lg:text-4xl text-center mb-3 ms-3 position-absolute'>Repair Technology</h2>
        <div className='mt-5'>
        <CheckOutInput/>
        </div>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default CheckOutPage