import React from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";

function Comp_2()
{
    return(
        <div className=' flex flex-col w-[172px] h-[136px] border-dashed'>
            <button className='flex flex-row items-center gap-2 p-2  ml-5 mt-5 rounded-[28px]'>
                <MdOutlineAccountCircle></MdOutlineAccountCircle> My Account
            </button>
            <button className='flex flex-row items-center gap-2 p-2 rounded-[28px] ml-5 mt-5 bg-green-300 '>
                <MdOutlineAccountCircle></MdOutlineAccountCircle> My Account
            </button>
        </div>
    )
}

export default Comp_2