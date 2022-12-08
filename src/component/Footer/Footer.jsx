import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-[410px] md:h-[496px] bg-black text-white px-4 overflow-hidden md:flex md:justify-center  ">
      <div className="w-397px md:w-[1224px] relative">
        <div className="w-full md:flex md:h-full md:justify-center md:items-center  ">
          <div className="mb-10 md:w-[50%] md:m-0">
            <h1 className="font-extrabold text-2xl py-12 md:p-0 md:mb-10">
              WORKING HOURS
            </h1>
            <p className="font-sans">Monday - Friday 5:00 AM - 12:00 AM</p>
            <p className="font-sans">Sunday - Saturday 8:00 AM - 10:00 PM</p>
          </div>

          <div className="md:w-[50%]">
            <div className="">
              <h1 className="font-extrabold text-2xl pb-10 md:p-0 md:mb-10">
                ADDRESS
              </h1>
              <p className="font-sans">661 Sulphur Springs Ave. </p>
              <p className="font-sans">Bronx, NY 10465</p>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center md:items-center md:ml-[245px]  z-10 ">
          <div className="flex h-[50px] mt-7 md:w-[1224px] md:absolute md:top-80 md: md:right-10 md:left-0 ">
            <BsTwitter
              size="20px"
              className="mr-7 md:mr-[4.75rem] cursor-pointer "
            />
            <BsFacebook
              size="20px"
              className="mr-7 md:mr-[4.75rem] cursor-pointer "
            />
            <AiOutlineInstagram size="25px" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
