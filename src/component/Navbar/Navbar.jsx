import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function Navbar(props) {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "2px solid" : "",
    };
  };

  return (
    <div className="bg-black text-white flex justify-center items-center fixed top-0 left-0 right-0 z-50 ">
      <div className="xl:w-[1224px] z-10  md:w-full  pb-1 xl:px-0 w-full ">
        <div className="flex items-center xl:h-[92px] h-[50px] md:w-full  xl:px-0 md:justify-between lg:justify-start ">
          <span className="xl:text-2xl text-xl font-bold py-10 px-4 md:px-4 xl:px-0 xl:m-0 pl-2 xl:mr-[30px] ">
            <NavLink onClick={() => setOpenMenu(false)} to="/">
              See Gym
            </NavLink>
          </span>
          <ul className="xl:ml-0 ml-auto py-10 ">
            {openMenu && isMobile ? (
              <MdOutlineClose
                size="24px"
                className=" cursor-pointer md:mx-4 mx-4"
                onClick={handleMenu}
              />
            ) : !openMenu && isMobile ? (
              <HiOutlineMenu
                size="24px"
                className=" cursor-pointer md:mx-4 mx-4"
                onClick={handleMenu}
              />
            ) : (
              <ul
                onBlur={() => console.log("123")}
                className="flex items-center gap-8 py-10 px-4 text-base"
              >
                <li>
                  <NavLink
                    style={navLinkStyles}
                    className="ml-5 hover:border-b py-1 font-sans "
                    to="/classes"
                  >
                    Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navLinkStyles}
                    className="hover:border-b py-1 font-sans"
                    to="/personal"
                  >
                    Personal Workouts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navLinkStyles}
                    className="hover:border-b py-1 font-sans"
                    to="/prices"
                  >
                    Prices & Plans
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navLinkStyles}
                    className="hover:border-b py-1 font-sans"
                    to="/schedule"
                  >
                    Schedule
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navLinkStyles}
                    className="hover:border-b py-1 font-sans"
                    to="/signup"
                  >
                    Sign up
                  </NavLink>
                </li>
              </ul>
            )}
            {openMenu && (
              <div
                onClick={() => setOpenMenu(false)}
                className="w-full h-[4040px] mt-2 z-50 absolute right-0 bg-transparent text-left text-black animate-appear "
              >
                <ul className="flex flex-col bg-white">
                  <div className=" border-y-2 ">
                    <Link
                      to="/classes"
                      className="py-[10px] px-4 block "
                      onClick={() => setOpenMenu(false)}
                    >
                      Classes
                    </Link>
                  </div>
                  <div className=" border-y-2 ">
                    <Link
                      to="/personal"
                      className="px-4 py-[10px] block "
                      onClick={() => setOpenMenu(false)}
                    >
                      Personal
                    </Link>
                  </div>
                  <div className=" border-y-2 ">
                    <Link
                      to="/prices"
                      className="px-4 py-[10px] block"
                      onClick={() => setOpenMenu(false)}
                    >
                      Prices
                    </Link>
                  </div>
                  <div className=" border-y-2 ">
                    <Link
                      to="/schedule"
                      className="px-4 py-[10px] block"
                      onClick={() => setOpenMenu(false)}
                    >
                      Schedule
                    </Link>
                  </div>
                  <div className=" border-t-2 ">
                    <Link
                      to="/signup"
                      className="px-4 block py-[10px]"
                      onClick={() => setOpenMenu(false)}
                    >
                      Signup
                    </Link>
                  </div>
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
