import Cadio from "./img/cadio.avif";
import Yoga from "./img/yoga.avif";
import Press from "./img/press.avif";
import Lifting from "./img/Lifting.avif";
import Slogan from "../../Slogan";
import About from "../../About/About";
import Ready from "../../Ready/Ready";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="">
      <Slogan />

      <div className="w-full lg:h-[1615px] h-[1960px] md:h-[1770px] bg-white flex justify-center  px-4 lg:px-0 mt-[170px] md:mt-[325px] lg:mt-28   ">
        <div className="w-[1224px] h-[1520px] lg:pb-10 md:flex md:justify-center md:items-center">
          <div className="">
            <h1 className="text-[32px] lg:text-5xl lg:my-32 my-8 font-extrabold">
              POPULAR CLASSES
            </h1>

            <div className="grid lg:grid-cols-1 md:flex md:justify-center md:items-center md:w-full lg:block">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-32 lg:gap-x-48 gap-10  md:w-[382px] lg:w-full ">
                <div className="mb-10">
                  <a href="/cardio" className="">
                    <img src={Cadio} alt="" className="w-full h-full" />
                    <div className="font-bold text-2xl my-[1.25rem] lg:text-3xl">
                      Cardio
                    </div>
                  </a>
                </div>

                <div className="mb-10">
                  <a href="/yoga" className="">
                    <img src={Yoga} alt="" className="w-full h-full" />
                    <div className="font-bold text-2xl my-[1.25rem] lg:text-3xl">
                      AirYoga
                    </div>
                  </a>
                </div>
                <div className="mb-10">
                  <a href="/lifting" className="">
                    <img src={Lifting} alt="" className="w-full h-full" />
                    <div className="font-bold text-2xl my-[1.25rem] lg:text-3xl">
                      Lifting
                    </div>
                  </a>
                </div>
                <div className="mb-10">
                  <a href="/press" className="">
                    <img src={Press} alt="" className="w-full h-full" />
                    <div className="font-bold text-2xl my-3 lg:text-3xl">
                      Press & Back
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-20  ">
              <Link to="/classes" className="btn  ">
                CHECK ALL CLASSES
              </Link>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Ready />
    </div>
  );
};

export default HomePage;
