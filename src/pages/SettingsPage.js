import React from 'react'
import Form from 'react-bootstrap/Form';
import Sidebar from "../components/Sidebar";
import Notif from "../components/Notif";
import ImgProfile from '../assets/image/foto firman di pik.jpg'
import Awan from '../assets/image/Vector.png'
import Button from 'react-bootstrap/Button';

const SettingsPage = () => {
  return (
    <>
    <Sidebar />
    <Notif />
        <Form className='mx-auto w-25'>
        <div className="judul-settings">
            <h1>Settings</h1>
        </div>
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
          <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className='fw-bold'>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className='fw-bold'>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email Address" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className='fw-bold'>Departement</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Departement" />
          </Form.Group>
          <Button variant="danger" className='w-100'>Save My Profile</Button>
        </Form>

    </>
  )
}

export default SettingsPage