import './App.css'
import PropertyTypeNav from './components/FilterDeals/PropertyTypenav'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import { properties } from './components/data/homeData'
import { propertyTypes } from './components/data/homeData'
import PropertyList from './components/FilterDeals/PropertyList'
import MostTrending from './components/MostTrending/MostTrending'
import { trendingProperties } from './components/data/homeData'
import Footer from './components/Footer/Footer'
import { footerData } from './components/data/homeData'
import HowItWorksCards from './components/HowItWorksCards/HowItWorksCards'
import DreamHome from './components/DreamHome/DreamHome'
function App() {

  const navItems = [
    { label: "Home", path: '/' },
    { label: "About", path: '#' },
    { label: "Service", path: '#' },
    { label: "New property", path: '#' },
    { label: "Contact", path: '#' },
  ]



  // Filter
  const [activePropertyType, setActivePropertyType] = useState<string>('Residential');
  const filteredProperties = properties.filter(property => property.type === activePropertyType);



  return (
    <>
      <Navbar logo='/images/logo.png' items={navItems} burger='/images/navbarImages/burger.png' close='/images/navbarImages/close.png' />
      <Hero />
      <HowItWorksCards />
      <DreamHome />
      <MostTrending properties={trendingProperties} />
      <PropertyTypeNav
        propertyTypes={propertyTypes}
        activePropertyType={activePropertyType}
        onSelectPropertyType={setActivePropertyType}
      />
      <PropertyList properties={filteredProperties} />
      <Footer {...footerData} />
    </>
  )
}

export default App