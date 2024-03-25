import React from 'react'
import { EPCardProps } from '../types/types'

const EPCard = ({ title, description, img, link }: EPCardProps) => {
  return (
    <div className='lg:w-1/3 flex flex-col gap-7 justify-between'>
        <h3 className='font-bold text-xl'>{title}</h3>
        <p className='text-gray-600 w-10/12'>{description}</p>

        <a href='/' className='text-sky-800 hover:underline max-w-fit font-semibold'><p>{`${link} >`}</p></a>

        <img src={img} alt="back-of-car-img" className='' />
    </div>

  )
}

export default EPCard