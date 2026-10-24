import ExploreBooks from '@/components/ExploreBook/ExploreBooks'
import FeaturedBooks from '@/components/FeaturedBook/FeaturedBooks'
import Intro from '@/components/Intro/Intro'
import Blog from "@/components/Blog/Blog"
import PodCast from "@/components/PodCast/PodCast"
import SeriesSection from "@/components/Series/SeriesSection"
import React from 'react'


const page = () => {
  return (
    <div>
   
    <Intro/>
    <SeriesSection/>
    <FeaturedBooks/>
    <ExploreBooks/>
    <Blog/>
    <PodCast/>
    </div>
  )
}

export default page
