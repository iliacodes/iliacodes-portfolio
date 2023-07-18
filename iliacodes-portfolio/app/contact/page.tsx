import SubHeader from '@/components/BottomNav';
import Header from '@/components/Header';
import React from 'react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div>
      <div className="">
        <Header />
        <SubHeader />
      </div>
      <div>
        <ContactForm />
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;


