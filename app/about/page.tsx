import React from 'react'
// import Created from '@/components/Created/Created'
import AboutUS from '@/app/about/AboutUS'
import AboutIntro from '@/app/about/AboutIntro'
import { pageMetadata } from '@/app/utils/metadata'

export const metadata = pageMetadata({ title: 'Biz haqimizda', path: '/about' })




const AboutUs = () => {
  return (
  <div>
    <AboutIntro/>
    <AboutUS/>
    {/* <Created/> */}
  </div>
  )
}

export default AboutUs