import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const AboutIntro = () => {
  return (  
     <div className="bg-blue-100">
         <div className="flex flex-col md:flex-row items-center justify-between py-[80px]  lg:py-0">
           <div className="relative w-[246px] h-60 md:w-80 md:h-80 lg:inline-block hidden">
             <Image
               src="/images/book.png"
               alt="Colorful books"
               className="object-contain w-[246px] absolute bottom-0"
               width={300}
               height={300}
               />
           </div>
   
           <div className="text-center md:text-left mt-8 md:mt-0">
             <h1 className="text-4xl font-bold text-[#002f4b] mb-4">BIZ HAQIMIZDA</h1>
             <div className="text-[#002f4b]">
               <Link href="/" className="hover:underline">Bosh Sahifa</Link> <span> &gt; </span> <span className="font-semibold">Biz haqimizda</span>
             </div>
           </div>
      <div className="relative w-[246px] h-60 md:w-80 md:h-80 lg:inline-block hidden">
             <Image
               src="/images/book2.png"
               alt="Stacked books"
               className="object-contain w-[246px] absolute right-0"
               width={300}
               height={300}
             />
           </div>
         </div>
       </div>
  );
}


export default AboutIntro