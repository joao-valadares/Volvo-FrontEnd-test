import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img from '../public/images/logo.svg'


const Header = () => {
  return (
    <header className='flex px-8 py-3 items-center sticky top-0 justify-between z-10 back bg-white'>
        <Image src="/images/logo.svg" alt='carhub logo' width={122} height={18} className='object-contain' />

        <div className='flex gap-5 font-semibold text-base'>
            <Link href='/'>Nossos Carros</Link>
            <Link href='/'>Menu</Link>
        </div>
    </header>
  )
}

export default Header