"use client";
import AboutUs from '@/components/aboutus'
import Hero from '@/components/hero'
import Services from '@/components/services'
import WhyUs from '@/components/whyus'
import Plans from '@/components/Plans'
import Footer from '@/components/footer'
import React from 'react'


function page() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutUs />
      <WhyUs />
      <Plans />
      <Footer />
    </div>
  )
}

export default page
