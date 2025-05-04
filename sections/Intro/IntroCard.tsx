import Button from '@/components/common/Button'
import React from 'react'

const IntroCard = () => {
  return (
    <div className='flex justify-between'>
        <div className='py-[112px] w-[607px] max-w-full'>
            <h3 className='inter text-6xl not-italic font-semibold text-primary leading-[1.45] tracking-[-0.02em]'> ipsum dolor si</h3>
            <p className='pt-[9px] pb-[28px] inter not-italic font-medium text-[22px] text-primary leading-[1.80] tracking-[0.04em] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
            <Button>Read more</Button> 
        </div>
        <div>
            <img src="/images/E-raamatud ja audioraamatud sisselogimata 1.png" alt="" />
        </div>
    </div>
  )
}

export default IntroCard