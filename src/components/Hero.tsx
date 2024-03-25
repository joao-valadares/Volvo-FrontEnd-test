import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div className='w-full relative'>
      <video className='object-cover w-full h-screen lg:h-full' src="/videos/volvo.mp4" autoPlay muted loop></video>
      <div className='absolute top-0 left-0 flex flex-col h-full w-full justify-start items-center gap-3 mt-14'>
        <p className='font-bold text-white'>A pré-venda começou. Reserve agora o seu</p>
        <h1 className='font-bold text-white text-3xl'>EX30</h1>
      <div className='flex gap-4'>
        <CustomButton text='Saiba mais' url='/' className='bg-white text-gray-950 border-white' />
        <CustomButton text='Configure' url='/' className='border-white text-white' />
      </div>
      </div>
    </div>
  )
}

export default Hero
