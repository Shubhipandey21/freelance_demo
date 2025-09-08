import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import UpcomingEvents from './components/UpcomingEvents'
import TestimonialSection from './components/Testimonial'
import EventGallery from './components/EventGallery'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import ContactUsSection from './components/Contact'

function App() {


  return (
    <>
      
      <Navbar />
      
      <Hero />
      <About />
      <Stats />
      <UpcomingEvents />
      <ContactUsSection />
      <EventGallery />
      <TestimonialSection />
      <Partners />
      <Footer />
      
      
    </>
  )
}

export default App
