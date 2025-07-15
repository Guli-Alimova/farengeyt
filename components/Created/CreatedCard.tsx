import React from 'react'
import Image from 'next/image';

type CreatedCardProps = {
    name: string;
    image: string;
    description:string;
    work:string;
  }
  
  const  CreatedCard:React.FC<CreatedCardProps> = ({ name, image, description, work }) => {
    return (
      <div className="bg-white rounded-xl shadow p-4 text-center w-60 flex flex-col items-center gap-4">
        <div className="relative">
          <Image src="/images/shape-img.png" alt="shape" />
          <Image
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mx-auto border-1 border-white shadow absolute top-3 left-6"
          />
         
        </div>
        <div className="border border-dashed rounded-lg p-2 w-full">
          <h3 className="font-semibold text-lg text-primary">{name}</h3>
          <p className="text-sm text-silver">{description}</p>
          <p className="text-sm text-secondary">{work}</p>
        </div>
      </div>
    );
  }
  export default CreatedCard
  