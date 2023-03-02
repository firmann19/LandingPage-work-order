import React from 'react';
import ContactUs from '../components/ContactUs';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import ServiceList from '../components/ServiceList';

const HomePage = () => {
  return (
    <div id="homePage" >
    <Navigation />
    <Header />
    <ServiceList />
    <ContactUs />
    <footer>
        <Footer />
    </footer>
    </div>
  )
}

export default HomePage