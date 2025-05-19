import ExploreBooks from '@/components/ExploreBook/ExploreBooks'
import FeaturedBooks from '@/components/FeaturedBook/FeaturedBooks'
import Intro from '@/components/Intro/Intro'
import Created from '@/components/Created/Created'
import React from 'react'

const page = () => {
  return (
    <div>
    <Intro/>
     <FeaturedBooks/>
    <ExploreBooks/>
    <Created/>
    </div>
  )
}

export default page
