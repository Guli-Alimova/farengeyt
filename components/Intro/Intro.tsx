import Link from "next/link";
import React from "react";
import Image from "next/image";
import "../../styles/globals.css"

const Intro = () => {
  return (
    <div className="relative bg-blue-100 overflow-hidden pb-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-[25px] relative z-10">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-secondary text-[20px] italic mb-4">Up To 30% Off</p>
            <h1 className="text-[32px] sm:text-[56px] lg:text-[74px] leading-[1.2] font-bold md:text-center text-primary mb-8 font-inter lg:w-[735px] md:w-[450px] w-[300px]">
              Get Your New Book 
              With The Best Price
            </h1>
            <Link href="/about" className="bg-[#ED553B] hover:bg-[#14548a] text-white text-[16px] px-6 py-3 rounded-full shadow-md font-semibold transition duration-300">
              Learn More →
            </Link>
          </div>

          {/* Image Section */}
          <div className="pt-10 lg:pt-70 top-[80px] left-[60px] relative ">
            <Image
              src="/images/hero-book.png"
              alt="hero girl"
              className="w-[300px] hidden lg:inline md:w-[400px] lg:w-[500px] xl:w-[589px] z-50 animate-float-x"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Decorations */}
      <Image
        src="/images/bg-shape.png"
        alt="shape"
        className="hidden lg:inline absolute top-0 left-[488px] lg:w-[750px] w-[200px] z-10"
        width={200}
        height={200}
      />
      <Image
        src="/images/frame-2.png"
        alt="frame"
        className="hidden lg:inline absolute top-0 left-[36%] w-[254px] animate-float-x"
        width={254}
        height={254}
      />

      <Image
        src="/images/output-onlinegiftools.gif"
        alt="frame"
        className="hidden lg:inline absolute top-[70%] left-[-6%] w-[250px] animate-float-x"
        width={254}
        height={254}
      />
     
    </div>
  )
}

export default Intro;

