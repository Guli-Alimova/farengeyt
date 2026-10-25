import React from 'react'
import AboutUS from '@/app/about/AboutUS'
import PageHeading from '@/components/common/PageHeading'
import { pageMetadata } from '@/app/utils/metadata'

export const metadata = pageMetadata({ title: 'Biz haqimizda', path: '/about' })

const AboutUs = () => {
  return (
    <div>
      <PageHeading title="Biz haqimizda" />
      <AboutUS />
    </div>
  )
}

export default AboutUs
