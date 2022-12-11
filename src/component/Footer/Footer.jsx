import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full  h-[410px] lg:h-[496px] bg-black text-white px-4 overflow-hidden lg:flex lg:justify-center  ">
      <div className=" md:flex md:justify-center md:items-center md:w-[807px] lg:w-full ">
        <div className="w-397px lg:w-[1224px] relative">
          <div className="w-full lg:flex lg:h-full lg:justify-center lg:items-center  ">
            <div className="mb-10 lg:w-[50%] lg:m-0">
              <h1 className="font-extrabold text-2xl py-12 lg:p-0 lg:mb-10">
                WORKING HOURS
              </h1>
              <p className="font-sans">Monday - Friday 5:00 AM - 12:00 AM</p>
              <p className="font-sans">Sunday - Saturday 8:00 AM - 10:00 PM</p>
            </div>

            <div className="lg:w-[50%]">
              <div className="">
                <h1 className="font-extrabold text-2xl pb-10 lg:p-0 lg:mb-10">
                  ADDRESS
                </h1>
                <p className="font-sans">661 Sulphur Springs Ave. </p>
                <p className="font-sans">Bronx, NY 10465</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:justify-center lg:items-center lg:ml-[245px]  z-10 ">
            <div className="flex h-[50px] mt-7 md:text-white lg:w-[1224px] lg:absolute lg:top-[10rem] lg: lg:right-10 lg:left-0 ">
              <BsTwitter
                color="#ccc"
                size="20px"
                className="mr-7 lg:mr-[4.75rem] cursor-pointer "
              />
              <BsFacebook
                size="20px"
                className="mr-7 lg:mr-[4.75rem] cursor-pointer "
              />
              <AiOutlineInstagram size="25px" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
