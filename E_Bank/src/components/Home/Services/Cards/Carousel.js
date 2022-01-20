import React,{useState} from 'react';
import {ArrowLeft,ArrowRight} from './CardElements';

const Carousel = ({CardArray}) => {
    const [current,setCurrent]=useState(0);
    const length=CardArray.length;
    
    const nextSlide=()=>{
        setCurrent(current===length-1 ? 0 :current+1);
    }   
    const prevSlide=()=>{
        setCurrent(current===0 ? length-1 :current-1);
    }
    if(!Array.isArray(CardArray) || CardArray.length<=0){
        return null;
    }


    return (
        <>
            <ArrowLeft onClick={prevSlide} />
            <ArrowRight onClick={nextSlide} />
            {
                    CardArray.map((card,i)=>{
                        return(
                            <div className={i ===current ? 'slide active' :'slide'} key={i}> 
                                {i===current && card}
                            </div>   
                        )
                    })
                }

        </>
    )
}

export default Carousel
