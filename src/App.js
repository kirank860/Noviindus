import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import TeachingApproachSection from './components/TeachingApproachSection'
import ProgramsForKidsSection from './components/ProgramsForKidsSection'
import SubjectsWeTeachSection from './components/SubjectsWeTeachSection'
import Footer from './components/footer'
import BlogPostsSection from './components/BlogPostsSection'
import FAQAccordion from './components/FAQAccordion'
import TestimonialCarousel from './components/TestimonialCarousel'
import LearningSpace from './components/LearningSpace'
import LanguageCourses from './components/LanguageCourses'
import Educare from './components/Educare'


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StorySection/>
      <TeachingApproachSection/>
      <ProgramsForKidsSection/>
      <SubjectsWeTeachSection/>
      <Educare/>
      <LearningSpace/>
      <LanguageCourses/>
      <TestimonialCarousel/>
      <FAQAccordion/>
      <BlogPostsSection/>
      <Footer/>
    </div>
  )
}

export default App