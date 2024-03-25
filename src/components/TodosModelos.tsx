import React, { useState } from 'react'
import CustomModel from './CustomModel'
import { useEffect } from 'react';
import { CarModelProps } from '../types/types';

const TodosModelos = () => {

  const [customModel, setCustomModel] = useState<CarModelProps[]>([]);

  useEffect(() => {
    fetchCustomModel();
  }, []);

  const fetchCustomModel = async () => {
    const response = await fetch('/api/cars.json');
    const data = await response.json();
    setCustomModel(data);
  }


  return (
    <div className= 'mx-auto my-10 mt-16 w-11/12 flex flex-col items-center justify-start relative xl:w-8/12'>

        <h1 className='text-4xl font-semibold mb-16'>Todos os modelos Recharge</h1>

        <div className='flex gap-3'>

        {
          customModel.map((model:CarModelProps) => (
            <CustomModel key={model.id} modelName={model.modelName} modelType={model.modelType} imageUrl={model.imageUrl} bodyType={model.bodyType} id={model.id}/>
          ))
        }

        </div>

    </div>
  )
}

export default TodosModelos