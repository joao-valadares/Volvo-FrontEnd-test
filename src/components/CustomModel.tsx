import React from 'react'
import { CarModelProps } from '../types/types'

const CustomModel = ({ id, modelName, modelType, imageUrl, bodyType }:CarModelProps) => {
  return (
    <div className='flex flex-col'>

        <div className='text-xs font-bold text-gray-500'>{bodyType}</div>

        <div className='flex gap-1'>
            <h4 className='font-semibold'>{modelName}</h4>
            <h4 className='text-gray-500'>{modelType}</h4>
        </div>

        <img src={imageUrl} alt="car model Image" />

        <div className='flex flex-col xl:flex-row mt-5 justify-around'>
            <a href="/" className='text-sky-700 font-semibold hover:underline'>Conheça {'>'}</a>
            <a href="/" className='text-sky-700 font-semibold hover:underline'>Comprar {'>'}</a>
        </div>

    </div>
  )
}

export default CustomModel