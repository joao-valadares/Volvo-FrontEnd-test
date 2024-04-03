import React, { useCallback, useState } from 'react'
import { useEffect } from 'react';
import { CarModelProps } from '../types/types';
import CustomModel from './CustomModel';
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  bodyType?: string
}

const EmblaCarousel: React.FC<PropType> = (props) => {


  const [customModel, setCustomModel] = useState<CarModelProps[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel()

  useEffect(() => {
    fetchCustomModel();
  }, []);

  const fetchCustomModel = async () => {
    const response = await fetch('/api/cars.json');
    const data = await response.json();
    setCustomModel(data);
  }
  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)

  return (

    <section className="embla my-10 mt-16  w-11/12">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
      {customModel.filter((model:CarModelProps) => model.bodyType && model.bodyType.includes(props.bodyType || '')).map( model => (
            <div className='embla__slide'>

            <CustomModel key={model.id} modelName={model.modelName} modelType={model.modelType} imageUrl={model.imageUrl} bodyType={model.bodyType} id={model.id}/>

            </div>
          ))}
      </div>
    </div>
    <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
    
  )
}

export default EmblaCarousel