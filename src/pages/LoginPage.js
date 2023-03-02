/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../assets/image/login-page.png';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  return (
    <section id="loginPage" className="h-screen">
      <div className="flex flex-col items-center lg:flex-row lg:h-full">
        <div className="w-full self-center p-8 md:h-3/5 lg:w-2/5">
          <h1 className="font-Philosopher font-bold text-4xl text-danger md:text-6xl lg:text-4xl text-center mb-3">Login</h1>
          <p className="font-Quicksand mt-2 mb-4 md:text-lg lg:text-base text-center">Please Login to continue into the application.</p>
          <LoginInput />
          <p className='text-center font-Quicksand mt-4 md:text-lg lg:text-base'>
            Don&apos;t have an account?
            {' '}
            <Link className='underline text-link hover:text-linkHover' to="/register">Register</Link>
          </p>
        </div>
        <div className="w-full bg-slate-50 flex items-center md:h-2/5 lg:w-3/5 lg:h-full">
          <div className="inline-block">
            <img
              src={LoginImg}
              alt="login illustration image."
              className='w-3/4 mx-auto p-4 md:w-3/5 md:p-10'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;