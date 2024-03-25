import React from 'react'
import CustomButton from './CustomButton'

const Block = () => {
  return (
    <div className='flex w-11/12 xl:w-8/12 mx-auto gap-5 flex-wrap xl:flex-nowrap'>
        <div className='xl:w-1/2 flex flex-col items-center gap-6 justify-between'>
            <img src="/images/dealer1.webp" alt="car-dealer" />
            <h3 className='text-3xl font-semibold text-center w-1/2'>Encontre um concessionário</h3>
            <CustomButton text='Pesquisar' url='/' className='bg-transparent text-sky-700 border-sky-700' />
        </div>
        <div className='xl:w-1/2 flex flex-col items-center gap-6 justify-between'>
            <img src="/images/dealer2.webp" alt="car-dealer" />
            <h3 className='text-3xl font-semibold text-center'>Planeje suas revisões</h3>
            <CustomButton text='Saiba mais' url='/' className='bg-transparent text-sky-700 border-sky-700' />
        </div>
    </div>
  )
}

export default Block