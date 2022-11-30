import HeaderImg from "../Header/img/HeaderImg.webp";
import { Link } from "react-router-dom";

function Slogan() {
  const image = true;

  return (
    <div className="relative xl:h-[872px] h-[429px]">
      {image && (
        <img
          src={HeaderImg}
          alt=""
          className="w-full h-[429px] xl:h-full absolute z-0 object-cover"
        />
      )}
      <div className="text-white bg-black xl:flex xl:items-center xl:justify-center absolute top-0 xl:top-[150px] xl:right-[152px] bg-transparent z-10 ">
        <div className=" px-4 xl:mt-0 xl:w-[1224px] xl:h-[784px] w-[370px] h-[429px] xl:px-0 xl:flex xl:items-center  ">
          <div className="">
            <span className="text-[40px] w-[300px]  font-extrabold xl:flex xl:flex-col xl:justify-center ">
              <span className=" xl:text-[75px] xl:w-[836px] xl:leading-tight w-[400px] leading-tight">
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
