import { useState } from "react";
import logo from "../images/logo.svg";
import { SButton } from "./SButton";
import { AddTodo } from "./AddTodo";
import { Profile } from "./Profile";
export const Topbar = () => {
  const [addTodo, setAddTodo] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const toggleAddTodo = () => {
    setAddTodo(!addTodo);
  };
  const toggleProfile = () => {
    setOpenProfile(!openProfile);
  }
  return (
    <div className="flex justify-between border-b border-gray-200 bg-slate-100 h-16 w-full shadow-lg">
      <div className="ml-5 mt-1 h-10 w-36"> <img src={logo} alt="" /></div>
      <div className="flex">
        <div className="flex justify-center mx-2 mt-3 h-10 w-28 border-solid border-2 border-white bg-slate-400 text-center pt-1 hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-lg text-base" onClick={toggleAddTodo} > Add Todo </div>
        <div onClick={toggleProfile} className="h-10 w-10 mt-3 mr-5">
            <svg
                
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                // class="size-6"
                >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </div>
      </div>
      {openProfile ? <Profile toggleProfile={toggleProfile}/> : ""}
      {addTodo ? <AddTodo toggleAddTodo={toggleAddTodo} /> : ""}
    </div>
  );
};
