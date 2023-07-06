import SubHeader from '@/components/SubHeader';
import Header from '@/components/Header';
import React from 'react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Test2 from '@/components/Particles';

const Contact = () => {
  return (
    <div>
      <Test2
        showAnimation={true}
      />
      <div className="">
        <Header />
        <SubHeader />
      </div>
      <div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


