import './App.css'
import PropertyTypeNav from './components/FilterDeals/PropertyTypenav'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { useState, useEffect } from 'react'
import { properties } from './components/data/homeData'
import { propertyTypes } from './components/data/homeData'
import PropertyList from './components/FilterDeals/PropertyList'
import MostTrending from './components/MostTrending/MostTrending'
import { trendingProperties } from './components/data/homeData'
import Footer from './components/Footer/Footer'
import { footerData } from './components/data/homeData'
import HowItWorksCards from './components/HowItWorksCards/HowItWorksCards'
import DreamHome from './components/DreamHome/DreamHome'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const navItems = [
    { label: "Home", path: '/' },
    { label: "About", path: '#' },
    { label: "Service", path: '#' },
    { label: "New property", path: '#' },
    { label: "Contact", path: '#' },
  ]

  const [activePropertyType, setActivePropertyType] = useState<string>('Residential');
  const filteredProperties = properties.filter(property => property.type === activePropertyType);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <>
      <Navbar logo='/images/logo.png' items={navItems} burger='/images/navbarImages/burger.png' close='/images/navbarImages/close.png' />
      
      <div data-aos="fade-up">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <HowItWorksCards />
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <DreamHome />
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <MostTrending properties={trendingProperties} />
      </div>

      <div data-aos="fade-up" data-aos-delay="400">
        <PropertyTypeNav
          propertyTypes={propertyTypes}
          activePropertyType={activePropertyType}
          onSelectPropertyType={setActivePropertyType}
        />
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <PropertyList properties={filteredProperties} />
      </div>

      <Footer {...footerData} />
    </>
  )
}

export default App
