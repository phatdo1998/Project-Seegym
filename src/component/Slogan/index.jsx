import Header from "./img/Header-img.webp";
import { Link } from "react-router-dom";

function Slogan() {
  return (
    <div className="relative lg:h-[665px] h-[429px] z-0 ">
      <div className="w-full h-[700px] lg:mt-[95px] md:mt-[53px]  mt-[50px]">
        <img
          src={Header}
          alt=""
          className="w-full h-[560px] lg:h-[110%] object-cover"
        />
      </div>
      {/* {image && (
        <div className="h-[329px]">
          <img
            src={HeaderImg}
            alt=""
            className="w-full h-[329px] lg:h-full absolute z-0 object-cover"
          />
        </div>
      )} */}
      <div className="text-white bg-black lg:flex lg:items-center lg:justify-center absolute top-0  lg:top-[90px] lg:right-[152px] md:w-full bg-transparent z-10 ">
        <div className=" px-4 lg:mt-0 lg:w-[1224px] lg:h-[784px] w-[370px] h-[429px] lg:px-0 lg:flex lg:items-center md:flex md:justify-center md:items-center md:mt-[70px]  md:w-full ">
          <div className="mt-[100px] lg:mt-0 md:w-[382px] md:h-[429px] ">
            <span className="text-[40px] w-[300px]  font-extrabold lg:flex lg:flex-col lg:justify-center ">
              <span className=" lg:text-[75px] lg:w-[836px] lg:leading-tight w-[400px] leading-tight">
                IT’S ALL ABOUT WHAT YOU CAN ACHIEVE
              </span>
            </span>
            <div className="text-[18px] my-20 font-semibold font-sans leading-tight">
              Empower yourself to make the changes you need to make
            </div>
            <Link to="/prices" className="btn hover:bg-red-600  ">
              LET'S GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
