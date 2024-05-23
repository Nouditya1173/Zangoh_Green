import React from 'react';
import { IoIosSearch } from "react-icons/io";

function Comp_1()
{
     return(
        <div className='relative w-[277px] h-[156px] border border-dashed border-[#9747FF] rounded-[5px] bg-gray-600 gap-6'>
           <IoIosSearch className=' w-[24px] h-[24px] ml-3 mt-4 mb-3'></IoIosSearch>
           <IoIosSearch className=' w-[24px] h-[24px] absolute mt-6 ml-3'></IoIosSearch><input className='w-[237px] h-[46px] left-[20px] top-[20px] rounded-[34px] mt-3' type='text' placeholder='           Search'/>
        </div>
     )
}

export default Comp_1