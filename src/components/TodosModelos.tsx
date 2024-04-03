import React, { useState } from 'react'
import CustomModel from './CustomModel'
import { useEffect } from 'react';
import { CarModelProps } from '../types/types';
import EmblaCarousel from './EmblaCarousel';

const TodosModelos = () => {

  const [bodyType, setBodyType] = useState<string>("");


  return (
    <div className= 'mx-auto my-10 mt-16 w-11/12 mb-36 flex flex-col items-center justify-start relative xl:w-9/12'>

        <button className='text-4xl font-semibold mb-10'>Todos os modelos Recharge</button>

        <div className='flex gap-5 mb-10'>

        <button onClick={() => setBodyType('')} className='underline-offset-8 hover:underline decoration-sky-800 text-gray-400 focus:text-black focus:underline'>Todos</button>
        <button onClick={() => setBodyType('suv')} className='underline-offset-8 hover:underline decoration-sky-800  text-gray-400 focus:text-black focus:underline'>SUV</button>
        <button onClick={() => setBodyType('sedan')} className='underline-offset-8 hover:underline decoration-sky-800  text-gray-400 focus:text-black focus:underline'>Sedan</button>
        <button onClick={() => setBodyType('estate')} className='underline-offset-8 hover:underline decoration-sky-800  text-gray-400 focus:text-black focus:underline'>Estate</button>
        </div>



        <EmblaCarousel bodyType={bodyType} />


    </div>
  )
}

export default TodosModelos