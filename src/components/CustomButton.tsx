import React from 'react'
import { CustomButtonProps } from '../types/types'

const CustomButton = ( {text, url, className}: CustomButtonProps ) => {
  return (
    <a href={url} className={`w-36 h-10 border-2  flex items-center justify-center font-semibold rounded ${className}`}>
        <button type='button'>
            {text}
        </button>   
    </a>
  )
}

export default CustomButton