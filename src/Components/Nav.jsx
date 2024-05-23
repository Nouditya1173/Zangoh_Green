import React from 'react';
import { IoIosSearch } from "react-icons/io";
import logo from '../images/logo.png'
import user from '../images/user.png'
//import Image from '../images/Image.png'
import { MdSignalWifiStatusbarConnectedNoInternet1 } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";



function Nav()
{
    const navigate = useNavigate()
    const nav = [
        {
            id:1,
            title: "About Us",
            tom:'/aboutus'
        },
        {
            id:2,
            title: "Shop",
            tom:'/shop'
        },
        {
            id:3,
            title: "Cart",
            tom:'/cart'
        },
        {
            id:4,
            title: "Offers",
            tom:'/offers'
        },
        {
            id: 5,
            title : <IoIosSearch></IoIosSearch>
            
        }
    ]
    return(
        <div className=' m-4 flex flex-row '>
            <div className='p-4 mt-2 flex flex-row items-center justify-center gap-2'>
                 <img src={logo}/>
                 <h1 onClick={()=>navigate('/')} className="font-semibold cursor-pointer"> Green</h1>
            </div>
        
          <ul className='flex flex-row gap-4 p-4 items-center w-full h-20  pl-80' >
            {
                nav.map(({id,title,tom})=>(
                    <li onClick={()=>navigate(`${tom}`)} className="px-4 cursor-pointer capitalize font-medium hover:scale-105 border-b-1 duration-200" key={id}>{title}
                </li>
                ))
            }
          </ul>
          <div className="p-4 flex flex-row  gap-5 items-center">
               <img src={user}/>
              <button onClick={() => navigate("/account")} className=' font-medium flex flex-row  items-center justify-center gap-3'><MdOutlineAccountCircle></MdOutlineAccountCircle>MyAccount</button>

          </div>
        </div>
       /* <img className=" p-8"src={Image}/>*/
    )
}
export default Nav