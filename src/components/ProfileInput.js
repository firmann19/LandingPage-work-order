import React from 'react'
import { Form } from 'react-bootstrap'
import SButton from './partikel/Button'
import ImgProfile from '../assets/image/foto firman di pik.jpg'
import Awan from '../assets/image/Vector.png'

function ProfileInput({form, handleChange, handleSubmit, isLoading}) {
  return (
    <Form className='mx-auto w-25'>
        <div className='ganti-foto-settings'>
          <img
              src={ImgProfile}
              width="90"
              height="90"
              className="rounded-full img-fluid mb-40"
            />
              <input 
                type="image" 
                src={Awan}
                width="90"
                height="90"
              />
          </div>
          <Form.Group className="mb-4" controlId="formName">
          <Form.Label className='fw-bold'>Full Name</Form.Label>
          <Form.Control value={form?.name}  onChange={handleChange} type="name" placeholder="Enter Your Name" />
          </Form.Group>
          <SButton variant="danger" className='w-100'>Save My Profile</SButton>
        </Form>
  )
}

export default ProfileInput