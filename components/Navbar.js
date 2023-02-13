import Image from 'next/image'
import uaeflag from '../public/images/uaeflag.svg'
import logo from '../public/images/noon-logo.svg'
import dropdwonarrow from "../public/images/dropdownArrow.svg"
const Navbar = () => {
  return (
    <div>
      <nav className="bg-yellow-300 p-4 ">
        <ul className="flex flex-row    flex-wrap sm:flex-nowrap">
          <Image
            src={logo}
            alt="logo"
            height={100}
            width={100}
            className="order-3 sm:order-1"
          />
          <ul className="flex items-center px-2 overflow-hidden order-first sm:order-2 w-fit cursor-pointer ">
            <li className="px-2">
              <Image src={uaeflag} alt="flag" />
            </li>
            <li className="whitespace-nowrap text-gray-900 text-xl font-normal hover:text-gray-600">
              Deviver to
            </li>
            <li>
              <Image src={dropdwonarrow} alt="arrow" />
            </li>
          </ul>
          <div className="flex-1 px-2 order-last sm:order-3 ">
            <input
              type="search"
              id="default-search"
              class="block  w-full p-2 my-2 text-sm text-gray-900 focus:ring-1 rounded-lg bg-gray-50 focus:outline-none focus:ring focus:border-gray-500"
              placeholder="What are you looking for?"
              required
            />
          </div>
          <div className="divide-x divide-gray-600 flex items-center order-2 sm:order-last">
            <div className="flex px-2 flex-nowrap cursor-pointer hover:text-gray-600 ">
              <p className="font-medium pr-2">Sign In</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="p-2">
              <div className="flex cursor-pointer hover:text-gray-600">
                <p className="font-medium pr-2">Cart</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar