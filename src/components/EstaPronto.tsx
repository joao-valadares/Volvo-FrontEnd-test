import React from 'react'
import EPCard from './EPCard'

const EstaPronto = () => {
  return (
    <div className= 'mx-auto my-36 w-11/12 flex flex-col items-center justify-start relative xl:w-8/12'>

        <h1 className='text-3xl font-bold mb-4 text-center'>Está pronto para eletrificar a sua condução?</h1>
        <p className='mb-24 w-8/12 lg:w-5/12 text-center text-xl text-gray-600'>Tudo o que precisa de saber para optar com confiança pela mobilidade elétrica e encontrar o carro elétrico Volvo à sua medida.</p>

        <div className='flex gap-8 flex-col lg:flex-row'>
            <EPCard title='Carros 100% elétricos' description='Os nossos carros 100% elétricos oferecem uma condução sem emissões sem comprometer a autonomia e a potência.' img='/images/car1.webp' link='Carros 100% elétricos' />

            <EPCard title='Carros híbridos plug-in' description='Os híbridos plug-in juntam um motor elétrico e um motor de combustão para conduzir sem preocupações.' img='/images/car2.webp' link='Carros híbridos plug-in' />

            <EPCard title='Carregamento elétrico' description='Carregar o seu carro elétrico em casa e na estrada pode ser fácil, rápido e econômico.' img='/images/car3.webp' link='Carregamento de carro' />
        </div>

    </div>
  )
}

export default EstaPronto