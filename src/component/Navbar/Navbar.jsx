import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
// import { MdOutlineClose } from "react-icons/md";
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
            <NavLink to="/">See Gym</NavLink>
          </span>
          <ul className="xl:ml-0 ml-auto py-10 ">
            {openMenu && isMobile ? (
              // <MdOutlineClose
              //   size="24px"
              //   className=" cursor-pointer"
              //   onClick={handleMenu}
              // />
              <HiOutlineMenu
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
                    classes
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
            {/* {openMenu && (
              <div className="w-full h-[130px] mt-2  absolute right-0 bg-white p-4 text-left text-black ">
                <ul className="flex flex-col">
                  <Link to="/classes" className="">
                    classes
                  </Link>
                  <Link to="/personal" className="pt-1 hover: ">
                    personal
                  </Link>
                  <Link to="/prices" className="pt-1">
                    prices
                  </Link>
                  <Link to="/schedule" className="pt-1">
                    schedule
                  </Link>
                  <Link to="/signup" className="">
                    signup
                  </Link>
                </ul>
              </div>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Linkbar;
