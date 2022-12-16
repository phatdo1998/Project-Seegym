import Yoga1 from "./img/yoga1.avif";
import Yoga2 from "./img/yoga2.avif";
import Ready from "../../Ready/Ready";
import { Link } from "react-router-dom";

function Yoga() {
  return (
    <>
      <div className="bg-black xl:flex xl:items-center xl:justify-center ">
        <div className="md:flex md:justify-center md:items-center overflow-hidden">
          <div className=" text-white mt-[100px] px-4 md:w-[414px] md:h-[1035px]  h-[1065px]  xl:w-[1224px] xl:h-[887px]  xl:flex xl:items-center xl:p-0 xl:justify-center md:mt-[150px] xl:mt-[50px]">
            <div className="xl:w-[50%] md:w-[414px] ">
              <h1 className="font-extrabold text-[32px] xl:text-5xl md:w-full">
                Air Yoga
              </h1>
              <p className="font-sans text-[18px] my-8">
                Every Wednesday and Saturday 8:00 AM
              </p>
              <p className="font-sans xl:w-[503px]">
                Sure, you’ve heard or regular yoga, but what about trying out
                some new moves while floating feet into the air?{" "}
              </p>
              <p className="font-sans my-8 md:mt-8 md:mb-20 xl:mb-28 xl:w-[503px]">
                Air yoga is an interdisciplinary workout that combines the
                flexibility and technique of regular yoga with the strength
                building of hanging. Whether you’ve tried air yoga before or are
                a total beginner, you’re welcome in our classes.
              </p>
              <Link to="/prices" className="btn my-10 ">
                BOOK NOW
              </Link>
            </div>
            <div className="mt-10  md:w-[414px] xl:w-[496px] xl:h-[432px] md:flex md:justify-center md:items-center md:flex-col">
              <img
                src={Yoga1}
                alt=""
                className="w-full h-full xl:w-[502px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
              <img
                src={Yoga2}
                alt=""
                className="w-full h-full xl:w-[503px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Yoga;
