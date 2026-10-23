import React from 'react'
import ContactIntro from './ContactIntro'
import ContactMain from './ContactMain'
import { pageMetadata } from '@/app/utils/metadata'

export const metadata = pageMetadata({ title: 'Bogʻlanish', path: '/contact' })

const page = () => {
  return (
    <div>
        <ContactIntro/>
        <ContactMain/>
    </div>
  )
}

export default page