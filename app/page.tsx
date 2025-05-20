import ExploreBooks from '@/components/ExploreBook/ExploreBooks'
import FeaturedBooks from '@/components/FeaturedBook/FeaturedBooks'
import Intro from '@/components/Intro/Intro'
import Created from '@/components/Created/Created'
import Blog from "../components/Blog/Blog"
import PodCast from "@/components/PodCast/PodCast"
import React from 'react'

const page = () => {
  return (
    <div>
    <Intro/>
     <FeaturedBooks/>
    <ExploreBooks/>
    <Created/>
    <Blog/>
    <PodCast/>
    </div>
  )
}

export default page
