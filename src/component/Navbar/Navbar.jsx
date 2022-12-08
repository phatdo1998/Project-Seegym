import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function Linkbar(props) {
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
    <div className="bg-black text-white flex justify-center items-center">
      <div className="xl:w-[1224px] z-10 w-[398px] px-4 pb-1 xl:px-0 ">
        <div className="flex items-center xl:h-[92px]">
          <span className="md:text-2xl text-xl font-bold py-10 px-4 xl:px-0 m-[-25px] xl:m-0">
            <NavLink onClick={() => setOpenMenu(false)} to="/">
              See Gym
            </NavLink>
          </span>
          <ul className="xl:ml-0 ml-auto py-10 ">
            {openMenu && isMobile ? (
              <MdOutlineClose
                size="24px"
                className=" cursor-pointer"
                onClick={handleMenu}
              />
            ) : !openMenu && isMobile ? (
              <HiOutlineMenu
                size="24px"
                className=" cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <ul className="flex items-center gap-8 py-10 px-4 text-base">
                <li>
                  <NavLink
                    style={navLinkStyles}
                    className="ml-5 hover:border-b py-1 font-sans"
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
              <div className="w-full h-[240px] mt-2 z-50 absolute right-0 bg-white  text-left text-black ">
                <ul className="flex flex-col">
                  <div className="py-[10px] border-y-2">
                    <Link
                      to="/classes"
                      className="px-4"
                      onClick={() => setOpenMenu(false)}
                    >
                      Classes
                    </Link>
                  </div>
                  <div className="py-[10px] border-y-2">
                    <Link
                      to="/personal"
                      className="px-4 "
                      onClick={() => setOpenMenu(false)}
                    >
                      Personal
                    </Link>
                  </div>
                  <div className="py-[10px] border-y-2">
                    <Link
                      to="/prices"
                      className="px-4"
                      onClick={() => setOpenMenu(false)}
                    >
                      Prices
                    </Link>
                  </div>
                  <div className="py-[10px] border-y-2">
                    <Link
                      to="/schedule"
                      className="px-4"
                      onClick={() => setOpenMenu(false)}
                    >
                      Schedule
                    </Link>
                  </div>
                  <div className="py-[10px] border-t-2">
                    <Link
                      to="/signup"
                      className="px-4"
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

export default Linkbar;
