import Header from "./img/Header-img.webp";
import { Link } from "react-router-dom";

function Slogan() {
  return (
    <div className="relative xl:h-[665px] h-[429px] z-0 ">
      <div className="w-full h-[700px] xl:mt-[95px] md:mt-[53px]  mt-[50px]">
        <img
          src={Header}
          alt=""
          className="w-full h-[560px] xl:h-[110%] object-cover"
        />
      </div>

      <div className="text-white bg-black xl:flex xl:items-center xl:justify-center absolute top-0  xl:top-[90px]  md:w-full bg-transparent z-10 ">
        <div className=" px-4 xl:mt-0 xl:w-[1224px] xl:h-[784px] w-[370px] h-[429px] xl:px-0 xl:flex xl:items-center md:flex md:justify-center xl:justify-start md:items-center md:mt-[70px] md:w-full ">
          <div className="mt-[100px] xl:mt-0 md:w-[382px] md:h-[429px] ">
            <span className="text-[40px] w-[300px]  font-extrabold xl:flex xl:flex-col xl:justify-center ">
              <span className=" xl:text-[75px] xl:w-[836px] xl:leading-tight w-[400px] leading-tight">
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
