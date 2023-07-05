import SubHeader from '@/components/SubHeader';
import Header from '@/components/Header';
import React from 'react'
import ContactForm from '@/components/ContactForm';


const Contact = () => {
  return (
    <div>
      <div>
        <Header />
        <SubHeader />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;


