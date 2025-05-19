import React from 'react'

type ExploreBooksCardProps = {
  index: number
  image: string
  title: string
}

const ExploreBooksCard: React.FC<ExploreBooksCardProps> = ({ index, image, title }) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Rounded image with dashed border */}
      <div className="relative rounded-full p-4 w-[230px] h-[230px] flex items-center justify-center bg-white">
        <div className='rounded-full border-2 p-4 w-[200px] h-[200px]  border-dashed border-secondary'>
           <img src={image} alt={title} className="w-[90px] h-[120px] my-[19px] mx-auto object-cover rounded" />
        {/* Index Badge */}
        <div className="absolute top-4 right-6 bg-[#29479E] text-secondary text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center">
          {index < 10 ? `0${index}` : index}
        </div> 
        </div>
      
      </div>
      <h3 className="text-primary font-semibold mt-4 text-[16px]">{title}</h3>
    </div>
  )
}

export default ExploreBooksCard

