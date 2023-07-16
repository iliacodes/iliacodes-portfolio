import React from 'react'
import ChatContainer from '../../components/ChatContainer';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import Test2 from '../../components/Particles'

const About = () => {
  return (
    <div>
      {/* <Test2 
      showAnimation={true}
      /> */}
      <Header />
      <SubHeader />
      <div className="p-5">
        <div className="p-24">
          About
        </div>
        <div className="p-24">
          About
        </div>
        <div className="p-24">
          About
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;