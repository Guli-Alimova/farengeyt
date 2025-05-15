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
      <div className="relative rounded-full p-6 w-[150px] h-[150px] flex items-center justify-center bg-white">
        <div className='rounded-full border-2 p-4 w-[150px] h-[150px]  border-dashed border-[#b197fc]'>
           <img src={image} alt={title} className="w-[90px] h-[120px] object-cover rounded" />
        {/* Index Badge */}
        <div className="absolute -top-2 -right-2 bg-[#012a4a] text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center">
          {index < 10 ? `0${index}` : index}
        </div> 
        </div>
      
      </div>
      <h3 className="text-[#0a2d4a] font-semibold mt-4 text-[16px]">{title}</h3>
    </div>
  )
}

export default ExploreBooksCard

