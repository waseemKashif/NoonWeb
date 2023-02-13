import React from "react";
import { useState } from "react";

const DropdownComponent = () => {
    const [show, setShow]= useState(false);
    const dropdownData=[
        'Electronic and Mobile',
        'Beauti and Fragnance',
        'Sports',
        'Toys',
        'Home Decoration',
        'Fashion',
        'etc'
    ];
    // window.onclick=(event)=> {
        
    //   setShow(false)
    // };

  return (
    <div>
        <div className="flex flex-row items-center relative justify-start" id="dropdownCont">

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-blue-900  focus:outline-none  font-bold  text-sm px-4 py-2.5 text-center inline-flex items-center whitespace-nowrap "
        type="button"
        onClick={()=>setShow(!show)}
      >
        All Catagories
        <svg
          className="w-5 h-5 ml-2 text-blue-900 font-bold"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
        </div>

      <div
        id="dropdown"
        class={`z-10 ${show== true?"visible ":"hidden" } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute `}
      >
        <ul
          class="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            {
                dropdownData?.map((item,index)=>{
                    return (
                      <a href="#" key={index} class="block px-4 py-2 hover:bg-gray-100 ">
                        {item}
                      </a>
                    );
                })
            } 
          </li>
          
        </ul>
      </div>
    </div>
  );
};
export default DropdownComponent;
