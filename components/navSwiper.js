import React from "react";

const Nav_swiper = ({data}) => {
  
  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center -space-x-px ">
          <li>
            <a
              href="#"
              class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li className="flex items-center ">
            {data.map((item, index) => {
              return (
                <a
                  key={index}
                  href="#"
                  className=" leading-tight p-2 text-black-500 font-semibold bg-white hover:bg-gray-100 hover:text-gray-700 whitespace-nowrap"
                >
                  {item}
                </a>
              );
            })}
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 "
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav_swiper;
