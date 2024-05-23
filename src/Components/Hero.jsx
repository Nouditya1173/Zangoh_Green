import React from 'react';
import frame9 from '../images/Frame9.png'
//import { useState } from 'react';
import  main from '../images/main.png'


 function Hero()
 {
    return(
        <div class="flex flex-col items-start p-0 gap-[32px] absolute w-[1280px] h-[242px] left-[80px] top-[196px]">
           <div>
           <h2  className=' text-8xl font-bold text-green-600 gap-6 text-center justify-center'><span className=''>GreenWave    Ecology</span></h2>
           </div>
           <div className="grid grid-cols-3  ">
        <div className="flex justify-evenly  flex-col ">
          <div className="text-[20px] text-[#9B9B9B] ">
            Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient
            pretium turpis.
          </div>
          <div>
            <p className="text-[20px] text-[#9B9B9B] ">
              Lorem ipsum dolor sit amet consectetur.{" "}
            </p>

            <button className="bg-[#C4E7B2] rounded-full px-[8px] py-[8px] w-[130px] justify-center gap-2 flex items-center ">
              <p className=" font-[Quicksand]">Go Green</p>
              <img src={frame9} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={main} />
        </div>
        <div className="flex flex-col justify-evenly">
          <p className="text-[20px] text-[#9B9B9B] ">
            Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient
            pretium turpis. Lorem ipsum dolor sit amet consectetur. Mattis
            accumsan parturient pretium turpis.
          </p>
          <div
            className="image-container flex bg-green-400 max-w-[40px] rounded-md"
            style={{ cursor: "pointer" }}
          >
           
          </div>
        </div>
      </div>

        </div>
    )
 }
 export default Hero