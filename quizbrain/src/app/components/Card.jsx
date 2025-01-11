import React from 'react'
import icono from '@/app/assets/MarioHongo.png'

const Card = () => {
  return (
    <div className='w-[390px] h-[390px] bg-[#20232a] m-[25px] px-[5%] py-[2%] text-[#e2e5e8]'>
      <div className='flex flex-row w-[100%] justify-between'> 
        <img className='justify-start' src={icono}/>
        <p className='text-[#6e727b] justify-end mx-[%]'>Lorem Ipsum Lorem Ipsum </p>
      </div>
      <p className='overflow-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum arcu non hendrerit pharetra. Quisque ullamcorper laoreet eleifend. Quisque facilisis diam est, ac finibus justo tincidunt et. Praesent imperdiet neque at vestibulum suscipit. </p>
    </div>
  )
}

export {Card}