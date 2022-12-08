import Lifting1 from "./img/lifting1.avif";
import Lifting2 from "./img/lifting2.avif";
import Ready from "../../Ready/Ready";
import { Link } from "react-router-dom";

function Lifting() {
  return (
    <>
      <>
        <div className="bg-black md:flex md: items-center md:justify-center">
          <div className=" text-white px-4 h-[1060px] md:w-[1224px] md:h-[940px] md:flex md:items-center md:p-0 md:justify-center    ">
            <div className="md:w-[50%]">
              <h1 className="font-extrabold text-[32px] md:text-5xl">
                Lifting
              </h1>
              <p className="font-sans text-[18px] my-8">Every Day 21:00</p>
              <p className="font-sans md:w-[503px]">
                Lifting isn’t just about strength. While you will build great
                core, arm, and leg muscles while lifting, you’ll also develop
                better coordination and an understanding of how your body
                interacts with the world.
              </p>
              <p className="font-sans my-8 md:mb-28 md:w-[503px]">
                Whether you’re already an experienced weightlifter, or have
                never picked up a dumbbell in your life, you’ll find a lot of
                value in our classes.
              </p>
              <Link to="/prices" className="btn mb-10 ">
                BOOK NOW
              </Link>
            </div>
            <div className="mt-10">
              <img
                src={Lifting1}
                alt=""
                className="h-full w-full md:w-[503px] md:h-[403px] object-cover "
              />
              <img
                src={Lifting2}
                alt=""
                className="h-full w-full md:w-[503px] md:h-[403px]  mt-5 object-cover"
              />
            </div>
          </div>
        </div>
        <Ready />
      </>
    </>
  );
}

export default Lifting;
