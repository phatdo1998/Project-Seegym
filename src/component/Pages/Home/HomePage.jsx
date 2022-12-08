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

      <div className="w-full md:h-[1700px] h-[2000px] bg-white flex justify-center px-4 md:px-0 ">
        <div className="w-[1224px] h-[1520px] md:pb-10">
          <h1 className="text-[32px] md:text-5xl md:my-32 my-8 font-extrabold">
            POPULAR CLASSES
          </h1>

          <div className="grid md:grid-cols-1">
            <div className="grid  grid-cols-1 md:grid-cols-2 md:gap-y-32 md:gap-x-48 gap-10">
              <div className="mb-10">
                <a href="/cardio" className="">
                  <img src={Cadio} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-[1.25rem] md:text-3xl">
                    Cardio
                  </div>
                </a>
              </div>

              <div className="mb-10">
                <a href="/yoga" className="">
                  <img src={Yoga} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-[1.25rem] md:text-3xl">
                    AirYoga
                  </div>
                </a>
              </div>
              <div className="mb-10">
                <a href="/lifting" className="">
                  <img src={Lifting} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-[1.25rem] md:text-3xl">
                    Lifting
                  </div>
                </a>
              </div>
              <div className="mb-10">
                <a href="/press" className="">
                  <img src={Press} alt="" className="w-full h-full" />
                  <div className="font-bold text-2xl my-3 md:text-3xl">
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
