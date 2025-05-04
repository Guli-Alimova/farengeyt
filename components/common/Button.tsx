import { Right } from '@/public/svg';
import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset'; // Button type for form handling
    customLink?: string; // Optional custom link
  }
const Button: React.FC<ButtonProps> = ({ children}) => {
  return (
    <div className='py-[14px] px-[35px] bg-transparent border-1 border-primary rounded-[8px] inter font-normal text-base text-primary flex items-center w-[197px] max-w-full'>
    {children } <span className='ml-[8px]'><Right/></span>
    </div>
  )
}

export default Button