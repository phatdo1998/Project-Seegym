import Header from "./img/Header-img.webp";
import { Link } from "react-router-dom";

function Slogan() {
  return (
    <div className="relative md:h-[665px] h-[429px] z-0 ">
      <div className="w-full h-[700px] md:mt-[95px] mt-[50px]">
        <img
          src={Header}
          alt=""
          className="w-full h-[600px] md:h-full object-cover"
        />
      </div>
      {/* {image && (
        <div className="h-[329px]">
          <img
            src={HeaderImg}
            alt=""
            className="w-full h-[329px] md:h-full absolute z-0 object-cover"
          />
        </div>
      )} */}
      <div className="text-white bg-black md:flex md:items-center md:justify-center absolute top-0  md:top-[60px] md:right-[152px] bg-transparent z-10 ">
        <div className=" px-4 md:mt-0 md:w-[1224px] md:h-[784px] w-[370px] h-[429px] md:px-0 md:flex md:items-center  ">
          <div className="mt-[100px] md:mt-0">
            <span className="text-[40px] w-[300px]  font-extrabold md:flex md:flex-col md:justify-center ">
              <span className=" md:text-[75px] md:w-[836px] md:leading-tight w-[400px] leading-tight">
                IT’S ALL ABOUT WHAT YOU CAN ACHIEVE
              </span>
            </span>
            <div className="text-[18px] my-16 font-semibold font-sans leading-tight">
              Empower yourself to make the changes you need to make
            </div>
            <Link to="/prices" className="btn hover:bg-red-600 ">
              LET'S GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
