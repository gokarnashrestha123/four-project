import React from 'react' 
import HeroSection from '../components/homeComponents/HeroSection'
import Category from '../components/homeComponents/Category' 
import Usp from '../components/homeComponents/Usp'  
import ClassHightlight from '../components/homeComponents/ClassHightlight' 
import Testimonial from '../components/homeComponents/Testimonial' 
import NewsSection from '../components/homeComponents/NewsSection'
import Pricing from '../components/homeComponents/Pricing'
import Faq from '../components/homeComponents/Faq'
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Usp /> 
      <ClassHightlight />
      <Testimonial />
      <NewsSection />
      <Pricing />
      <Faq/>
    </div>
  )
}

export default HomePage