import Yoga1 from "./img/yoga1.avif";
import Yoga2 from "./img/yoga2.avif";
import Ready from "../../Ready/Ready";
import { Link } from "react-router-dom";

function Yoga() {
  return (
    <>
      <div className="bg-black md:flex md: items-center md:justify-center">
        <div className=" text-white px-4 h-[1066px] md:w-[1224px] md:h-[1060x] md:flex md:items-center md:p-0 md:justify-center    ">
          <div className="md:w-[50%]">
            <h1 className="font-extrabold text-[32px] md:text-5xl">Air Yoga</h1>
            <p className="font-sans text-[18px] my-8">
              Every Wednesday and Saturday 8:00 AM
            </p>
            <p className="font-sans md:w-[503px]">
              Sure, you’ve heard or regular yoga, but what about trying out some
              new moves while floating feet into the air?{" "}
            </p>
            <p className="font-sans my-8 md:mb-28 md:w-[503px]">
              Air yoga is an interdisciplinary workout that combines the
              flexibility and technique of regular yoga with the strength
              building of hanging. Whether you’ve tried air yoga before or are a
              total beginner, you’re welcome in our classes.
            </p>
            <Link to="/prices" className="btn mb-10 ">
              BOOK NOW
            </Link>
          </div>
          <div className="mt-10">
            <img
              src={Yoga1}
              alt=""
              className="w-full h-full md:w-[502px] md:h-[403px]  md:mt-5 mt-5  object-cover"
            />
            <img
              src={Yoga2}
              alt=""
              className="w-full h-full md:w-[503px] md:h-[403px]  md:mt-5 mt-5  object-cover"
            />
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Yoga;
