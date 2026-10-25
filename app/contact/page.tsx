import React from 'react'
import ContactMain from './ContactMain'
import PageHeading from '@/components/common/PageHeading'
import { pageMetadata } from '@/app/utils/metadata'

export const metadata = pageMetadata({ title: 'Bogʻlanish', path: '/contact' })

const page = () => {
  return (
    <div>
      <PageHeading title="Bogʻlanish" />
      <ContactMain />
    </div>
  )
}

export default page
