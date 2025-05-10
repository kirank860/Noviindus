import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import AnimatedSection from './components/AnimatedSection'

// Import all sections
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import TeachingApproachSection from './components/TeachingApproachSection'
import ProgramsForKidsSection from './components/ProgramsForKidsSection'
import SubjectsWeTeachSection from './components/SubjectsWeTeachSection'
import Educare from './components/Educare'
import LearningSpace from './components/LearningSpace'
import LanguageCourses from './components/LanguageCourses'
import TestimonialCarousel from './components/TestimonialCarousel'
import FAQAccordion from './components/FAQAccordion'
import BlogPostsSection from './components/BlogPostsSection'

const sections = [
  HeroSection,
  StorySection,
  TeachingApproachSection,
  ProgramsForKidsSection,
  SubjectsWeTeachSection,
  Educare,
  LearningSpace,
  LanguageCourses,
  TestimonialCarousel,
  FAQAccordion,
  BlogPostsSection,
]

const App = () => {
  return (
    <div>
      <Navbar />
      {sections.map((SectionComponent, index) => (
        <AnimatedSection key={index}>
          <SectionComponent />
        </AnimatedSection>
      ))}
      <Footer />
    </div>
  )
}

export default App
