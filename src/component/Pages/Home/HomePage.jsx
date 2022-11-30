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

      <div className="w-full xl:h-[1700px] h-[2000px] bg-white flex justify-center px-4 xl:px-0 ">
        <div className="w-[1224px] h-[1520px] xl:pb-10">
          <h1 className="text-[32px] xl:text-5xl xl:my-32 my-8 font-extrabold">
            POPULAR CLASSES
          </h1>

          <div className="grid xl:grid-cols-1">
            <div className="grid  grid-cols-1 xl:grid-cols-2 xl:gap-y-32 xl:gap-x-48 gap-10">
              <div className="mb-10">
                <a href="/cardio" className="">
                  <img src={Cadio} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-[1.25rem] xl:text-3xl">
                    Cardio
                  </div>
                </a>
              </div>

              <div className="mb-10">
                <a href="/yoga" className="">
                  <img src={Yoga} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-[1.25rem] xl:text-3xl">
                    AirYoga
                  </div>
                </a>
              </div>
              <div className="mb-10">
                <a href="/lifting" className="">
                  <img src={Lifting} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-[1.25rem] xl:text-3xl">
                    Lifting
                  </div>
                </a>
              </div>
              <div className="mb-10">
                <a href="/press" className="">
                  <img src={Press} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-3 xl:text-3xl">
                    Press & Back
                  </div>
                </a>
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
