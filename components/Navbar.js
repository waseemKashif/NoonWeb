import Image from "next/image";
import uaeflag from "../public/images/uaeflag.svg";
import logo from "../public/images/noon-logo.svg";
import dropdwonarrow from "../public/images/dropdownArrow.svg";
import UserIcon from "../public/images/userIconNav.svg"
import cartIcon from "../public/images/cartIconNav.svg"
const Navbar = () => {
  return (
    <div>
      <nav className="navBarSet p-1 ">
        <ul className="flex flex-row    flex-wrap sm:flex-nowrap">
          <Image
            src={logo}
            alt="logo"
            height={100}
            width={100}
            className="order-2 sm:order-1 p-2"
          />
          <ul className="flex items-center px-2 overflow-hidden order-3 sm:order-2 w-fit cursor-pointer ">
            <li className="px-2">
              <Image src={uaeflag} alt="flag" />
            </li>
            <li className="whitespace-nowrap text-black text-md font-normal hover:text-gray-600">
              Deviver to
            </li>
            <li>
              <Image src={dropdwonarrow} alt="arrow" />
            </li>
          </ul>
          <div className="flex-1 px-2 sm:px-4 md:px-5 order-last sm:order-3 ">
            <input
              type="search"
              id="default-search"
              className="block  w-full p-2 my-2 text-sm text-gray-900 focus:ring-1 rounded-lg bg-gray-50 focus:outline-none focus:ring focus:border-gray-500"
              placeholder="What are you looking for?"
              required
            />
          </div>
          <div className="divide-x divide-gray-400 flex items-center order-1 sm:order-last  lg:text-base text-sm">
            <div className="flex px-3 flex-nowrap cursor-pointer hover:text-gray-600 ">
              <p className="font-small sm:pr-2 pr-1 ">العربية</p>
            </div>
            <div className="flex px-3 flex-nowrap cursor-pointer hover:text-gray-600 ">
              <p className="font-medium  pr-1 sm:pr-2">Sign In</p>
              <span>
                <Image src={UserIcon} alt="svgIcon" width={20} height={20} />
              </span>
            </div>

            <div className="flex flex-nowrap  cursor-pointer hover:text-gray-600 px-3">
              <p className="font-medium pr-1 sm:pr-2">Cart</p>
              <span>
                <Image src={cartIcon} alt="cartIcon" />
              </span>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
