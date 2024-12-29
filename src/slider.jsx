import React, { useEffect, useState } from 'react'
import dataslider from './dataslider';
// import Btnslider from './btnslider'

export default function Slider() {
    const [curind,setCurind] = useState(1);

    const prev =()=>{
        const newind = curind===0?dataslider.length-1:curind-1;
        setCurind(newind);
    }
    const next = () => {
        const newind = curind == dataslider.length-1? 0:curind+1;
        setCurind(newind);
    }
    const gotoslide =(index)=>{
        setCurind(index);
    }

    return (
        <>
        <div className='container'>
            <div className='left'onClick={prev} >❰</div>            
            <div className='right'onClick={next}>&#10097;</div>            
            <img className='img' src={dataslider[curind].img} /> 
        </div>
        <div className='dotcontainer'>
            {dataslider.map((_,index) =>
                <div className='dot' key={index} onClick={()=>gotoslide(index)} ></div>
            )}
        </div>
            
        </>
    )
}
                        
