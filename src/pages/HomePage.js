import React from 'react';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
// import Footer from "../components/Footer";
import ServiceList from '../components/ServiceList';

const HomePage = () => {
  return (
    <div id="homePage" >
    <Navbar />
    <Header />
    <ServiceList />
    <ContactUs />
    {/* <footer>
        <Footer />
    </footer> */}
    </div>
  )
}

export default HomePage