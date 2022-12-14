import Lifting1 from "./img/lifting1.avif";
import Lifting2 from "./img/lifting2.avif";
import Ready from "../../Ready/Ready";
import { Link } from "react-router-dom";

function Lifting() {
  return (
    <>
      <>
        <div className="bg-black xl:flex xl:items-center xl:justify-center ">
          <div className="md:flex md:justify-center md:items-center overflow-hidden">
            <div className=" text-white px-4 md:w-[414px] md:h-[1020px]  h-[1055px]  xl:w-[1224px] xl:h-[887px]  xl:flex xl:items-center xl:p-0 xl:justify-center md:mt-[150px] xl:mt-[50px]">
              <div className="xl:w-[50%] md:w-[414px] ">
                <h1 className="font-extrabold text-[32px] xl:text-5xl md:w-full">
                  Lifting
                </h1>
                <p className="font-sans text-[18px] my-8">Every Day 21:00</p>
                <p className="font-sans xl:w-[503px]">
                  Lifting isn’t just about strength. While you will build great
                  core, arm, and leg muscles while lifting, you’ll also develop
                  better coordination and an understanding of how your body
                  interacts with the world.
                </p>
                <p className="font-sans my-8 md:mt-8 md:mb-20 xl:mb-28 xl:w-[503px]">
                  Whether you’re already an experienced weightlifter, or have
                  never picked up a dumbbell in your life, you’ll find a lot of
                  value in our classes.
                </p>
                <Link to="/prices" className="btn my-10 ">
                  BOOK MEMBERSHIP
                </Link>
              </div>
              <div className="mt-10  md:w-[414px] xl:w-[496px] xl:h-[432px] md:flex md:justify-center md:items-center md:flex-col">
                <img
                  src={Lifting1}
                  alt=""
                  className="w-full h-full xl:w-[502px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
                />
                <img
                  src={Lifting2}
                  alt=""
                  className="w-full h-full xl:w-[503px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Ready />
      </>
    </>
  );
}

export default Lifting;
