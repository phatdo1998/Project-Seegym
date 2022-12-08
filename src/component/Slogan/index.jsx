import HeaderImg from "../Header/img/HeaderImg.webp";
import { Link } from "react-router-dom";

function Slogan() {
  const image = true;

  return (
    <div className="relative md:h-[872px] h-[429px] z-0">
      {image && (
        <img
          src={HeaderImg}
          alt=""
          className="w-full h-[429px] md:h-full absolute z-0 object-cover"
        />
      )}
      <div className="text-white bg-black md:flex md:items-center md:justify-center absolute top-0 md:top-[150px] md:right-[152px] bg-transparent z-10 ">
        <div className=" px-4 md:mt-0 md:w-[1224px] md:h-[784px] w-[370px] h-[429px] md:px-0 md:flex md:items-center  ">
          <div className="">
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
