import Link from "next/link";
import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className=" relative bg-blue-100 overflow-hidden    pb-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-[25px]  relative z-10">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-secondary text-[20px] italic mb-4">Up To 30% Off</p>
            <h1 className="text-[32px] sm:text-[56px] lg:text-[74px] leading-[1.2] font-bold md:text-center text-primary mb-8 font-inter w-[735px]">
              Get Your New Book <br className="hidden md:block" />
              With The Best Price
            </h1>
            <Link href="/about" className="bg-[#ED553B] hover:bg-[#14548a] text-white text-[16px] px-6 py-3 rounded-full shadow-md font-semibold transition duration-300">
              Learn More →
            </Link>
          </div>

          {/* Image Section */}
          <div className=" pt-10 lg:pt-70 top-[80px] relative ">
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
        className="hidden lg:inline absolute top-0 left-[36%] w-[254px]  animate-float-x"
        width={254}
        height={254}
      />
      <Image
        src="/images/frame-shape.png"
        alt="shape"
        className="hidden lg:inline absolute bottom-[28%] right-[24%] w-[185px] animate-float-x"
        width={185}
        height={185}
      />
      <Image
        src="/images/xstar.png"
        alt="star"
        className="absolute top-[31%] right-[38%] w-[55px] animate-rotate-half "
        width={55}
        height={55}
      />
      <Image
        src="/images/book.png"
        alt=""
        className="absolute bottom-[1%] left-[-1%] w-[216px] rotate-[-10deg]"
        width={216}
        height={216}
      />
      <Image
        src="/images/frame-2.png"
        alt=""
        className="hidden lg:inline absolute bottom-[0%] right-[42%] w-[254px] opacity-70 animate-float-y"
        width={254}
        height={254}
      />
    </div>
  );
};

export default Intro;
