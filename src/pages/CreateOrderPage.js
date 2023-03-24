import React from 'react';
import CreateWoInput from '../components/CreateWoInput';
import Sidebar from '../components/Sidebar';
import Notif from "../components/Notif";

function CreateOrderPage() {
  return (
    <>
    <Sidebar />
    <Notif />
    <div className="responsive-form-checkout mx-auto">
    <div id="create-wo" className="h-screen mx-auto">
        <h2 className='font-Philosopher font-bold text-6xl md:text-6xl lg:text-6xl text-center '>Work Order</h2>
        <CreateWoInput />
        </div>
      </div>
    </>
  )
}

export default CreateOrderPage