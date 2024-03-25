import React from 'react'
import Image from 'next/image'

const PQVolvo = () => {
  return (
    <div className= 'mx-auto my-10 w-11/12 flex flex-col items-center justify-start relative xl:w-8/12'>

        <h1 className='text-4xl font-semibold'>Por que um Volvo?</h1>

        <img src="/images/pqvolvo.webp" alt="volvo" className='mt-14 mb-6'/>

        <div className='flex gap-2'>
            <div className='w-1/3'>
                <h3 className='font-semibold text-xl mb-1'>Simplificando a sua vida</h3>
                <p className='text-gray-600 '>Nosso novo jeito de ir de A até B. Tenha o seu volvo quando quiser, como quiser.</p>
            </div>
            <div className='w-1/3'>
                <h3 className=' font-semibold text-xl mb-1'>O futuro é elétricco</h3>
                <p className='text-gray-600'>Todos os nossos automóveis estão disponíveis na versão elétrica. Nós te ajudamos a reduzir o impacto ambiental do dia a dia.</p>
            </div>
            <div className='w-1/3'>
                <h3 className=' font-semibold text-xl mb-1'>Protegendo o que é importante</h3>
                <p className='text-gray-600'>Estamos orgulhosos do nosso legado em segurança. Seguimos inovando a maneira de ajudá-lo a proteger aquilo que é mais importante.</p>
            </div>
        </div>

        <a href='/' className='text-sky-700 border-sky-600 w-60 mt-8 h-10 border-2 flex items-center justify-center font-semibold rounded'>
            Saiba mais sobre a Volvo 
        </a>

    </div>
  )
}

export default PQVolvo