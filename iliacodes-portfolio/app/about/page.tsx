import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SubHeader from '../../components/SubHeader'
import AboutInsert from '../../components/AboutInsert'

const About = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <div className="p-5 sm:mt-24">
        <AboutInsert />
      </div>
      <Footer />
    </div>
  )
}

export default About;