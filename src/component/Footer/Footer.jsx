import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-[410px] xl:h-[496px] bg-black text-white px-4 overflow-hidden xl:flex xl:justify-center  ">
      <div className="w-397px xl:w-[1224px] relative">
        <div className="w-full xl:flex xl:h-full xl:justify-center xl:items-center  ">
          <div className="mb-10 xl:w-[50%] xl:m-0">
            <h1 className="font-extrabold text-2xl py-12 xl:p-0 xl:mb-10">
              WORKING HOURS
            </h1>
            <p className="font-sans">Monday - Friday 5:00 AM - 12:00 AM</p>
            <p className="font-sans">Sunday - Saturday 8:00 AM - 10:00 PM</p>
          </div>

          <div className="xl:w-[50%]">
            <div className="">
              <h1 className="font-extrabold text-2xl pb-10 xl:p-0 xl:mb-10">
                ADDRESS
              </h1>
              <p className="font-sans">661 Sulphur Springs Ave. </p>
              <p className="font-sans">Bronx, NY 10465</p>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:justify-center xl:items-center xl:ml-[245px]  z-10 ">
          <div className="flex h-[50px] mt-7 xl:w-[1224px] xl:absolute xl:top-80 xl: xl:right-10 xl:left-0 ">
            <BsTwitter
              size="20px"
              className="mr-7 xl:mr-[4.75rem] cursor-pointer "
            />
            <BsFacebook
              size="20px"
              className="mr-7 xl:mr-[4.75rem] cursor-pointer "
            />
            <AiOutlineInstagram size="25px" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
