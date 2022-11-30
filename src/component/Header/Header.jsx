import { NavLink } from "react-router-dom";
import HeaderImg from "./img/HeaderImg.webp";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
const Header = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="w-[100%]  text-white bg-black flex justify-center text-sm  relative">
      <div className="md:w-[1224px] z-10 w-[398px] px-4 xl:px-0 ">
        <div className="flex items-center xl:h-[92px]">
          <span className="md:text-2xl text-xl font-bold py-10 xl:px-0">
            <NavLink to="/">See Gym</NavLink>
          </span>
          <ul className="xl:ml-0 ml-auto py-10 ">
            {openMenu && isMobile ? (
              <HiOutlineMenu
                size="24px"
                className=" cursor-pointer"
                onClick={handleMenu}
              />
            ) : // <HiOutlineMenu
            //   size="24px"
            //   className=" cursor-pointer"
            //   onClick={handleMenu}
            // />
            !openMenu && isMobile ? (
              <HiOutlineMenu
                size="24px"
                className=" cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <ul className="flex items-center gap-8 py-10 px-4 text-base ">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "ml-5 hover:border-b py-1 font-sans border-b-2 "
                        : "ml-5 hover:border-b py-1 font-sans"
                    }
                    // className="ml-5 hover:border-b py-1 font-sans "
                    to="classes"
                  >
                    classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:border-b py-1 font-sans"
                    to="/personal"
                  >
                    Personal Workouts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:border-b py-1 font-sans"
                    to="/prices"
                  >
                    Prices & Plans
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:border-b py-1 font-sans"
                    to="/schedule"
                  >
                    Schedule
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:border-b py-1 font-sans"
                    to="/signup"
                  >
                    Sign up
                  </NavLink>
                </li>
              </ul>
            )}
            {/* {openMenu && (
              <div className="w-full h-[130px] mt-2  absolute right-0 bg-transparent p-4 text-left text-white ">
                <ul className="flex flex-col z-50">
                  <NavLink to="/classes" className="border-b py-1 border-red-900">
                    classes
                  </NavLink>
                  <NavLink to="/personal" className="py-1 border-b border-red-900">
                    personal
                  </NavLink>
                  <NavLink to="/prices" className="py-1 border-b border-red-900">
                    prices
                  </NavLink>
                  <NavLink to="/schedule" className="py-1 border-b border-red-900">
                    schedule
                  </NavLink>
                  <NavLink to="/signup" className="py-1 ">
                    signup
                  </NavLink>
                </ul>
              </div>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
