import React, { useState } from "react";
//import {user} from '../assets/assets/assts.js'
import user from '../images/user.png'
import cart from '../images/cart.png'
import reward from '../images/reward.png'
import timefill from '../images/time-fill.png'
import help from '../images/help.png'
import logout from '../images/logout.png'


const SideBar = ({ active, setActive }) => {
  return (
    <div className="bg-[#F7F7F7] max-w-[25%] flex flex-col rounded-lg justify-center items-center p-[20px] gap-[20px]">
      <ul className=" flex gap-[15px] flex-col w-full">
        <li
          onClick={() => {
            setActive((prev) => (prev === "account" ? "" : "account"));
          }}
          className={`flex items-center cursor-pointer justify-start   ${
            active === "account"
              ? "bg-[#E2E1E1] w-full p-[10px] rounded-full"
              : ""
          }`}
        >
          <img src={user}  />
          <p>Account Setting</p>
        </li>
        <li
          onClick={() => {
            setActive((prev) => (prev === "order" ? "" : "order"));
          }}
          className={`flex items-center  cursor-pointer justify-start   ${
            active === "order"
              ? "bg-[#E2E1E1] w-full p-[10px] rounded-full"
              : ""
          }`}
        >
          <img src={cart} />
          <p>My Order</p>
        </li>
        <li
          onClick={() => {
            setActive((prev) => (prev === "reward" ? "" : "reward"));
          }}
          className={`flex items-center cursor-pointer  justify-start   ${
            active === "reward"
              ? "bg-[#E2E1E1] w-full p-[10px] rounded-full"
              : ""
          }`}
        >
          <img src={reward} />
          <p>Rewards</p>
        </li>
        <li
          onClick={() => {
            setActive((prev) => (prev === "tans" ? "" : "tans"));
          }}
          className={`flex items-center cursor-pointer  justify-start   ${
            active === "tans" ? "bg-[#E2E1E1] w-full p-[10px] rounded-full" : ""
          }`}
        >
          <img src={timefill} />
          <p>Transcation</p>
        </li>
        <li
          onClick={() => {
            setActive((prev) => (prev === "help" ? "" : "help"));
          }}
          className={`flex items-center justify-start  ${
            active === "help" ? "bg-[#E2E1E1] w-full p-[10px] rounded-full" : ""
          }`}
        >
          <img src={help} />
          <p>Help</p>
        </li>
        <li
          onClick={() => {
            setActive((prev) => (prev === "logout" ? "" : "logout"));
          }}
          className={`flex items-center cursor-pointer  justify-start  ${
            active === "logout"
              ? "bg-[#E2E1E1] w-full p-[10px] rounded-full"
              : ""
          }`}
        >
          <img src={logout} />
          <p>Log Out</p>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;