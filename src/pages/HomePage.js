import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ServiceList from '../components/ServiceList';

const HomePage = () => {
  return (
    <div id="homePage" >
    <Navigation />
    <Header />
    <ServiceList />
    <ContactUs />
        <Footer />
    </div>
  )
}

export default HomePage