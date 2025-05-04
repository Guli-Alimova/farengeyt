import { Email, Facebook, Instagram, Twitter } from '@/public/svg'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='py-[15px] bg-[#2242B4]'>
        <div className="container">
            <div className='flex justify-between items-center '>
                <div className='text-[#ffffff] inline-block'>
                    <Link href="/" className='inline-block'><Email/></Link>
                    <span className='ml-[3px] inter'>guli.takhirjanova@gmailcom</span>
                </div>
                <div className='flex justify-between items-center gap-[42px]'>
                    <Link href="/"><Facebook/></Link>
                    <Link href="/"><Instagram/></Link>
                   <Link href="/"><Twitter/></Link> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar