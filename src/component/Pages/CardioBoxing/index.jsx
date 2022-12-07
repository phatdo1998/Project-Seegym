import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import CardioBoxing1 from "./img/CardioBoxing1.avif";
import CardioBoxing2 from "./img/CardioBoxing2.webp";

function CardioBoxing() {
  return (
    <>
      <div className="bg-black xl:flex xl: items-center xl:justify-center">
        <div className=" text-white px-4 h-[930px] xl:w-[1224px] xl:h-[760px] xl:flex xl:items-center xl:p-0 xl:justify-center    ">
          <div className="xl:w-[1224px]">
            <h1 className="font-extrabold text-[32px] xl:text-5xl">
              Cardio Boxing
            </h1>
            <p className="font-sans text-[18px] my-8">
              Every Monday and Friday 17:00
            </p>

            <p className="font-sans my-8 xl:mb-28 xl:w-[503px]">
              Sometimes nothing feels as good as putting on your gloves and
              kicking the crap out of a boxing bag or a set of pads. In our
              cardio boxing classes, we’ll focus on great technique and build
              stamina through boxing-inspired routines. There won’t be any
              contact exercises, meaning that you can get the benefits of a
              boxing workout without the fear of breaking someone’s nose.
            </p>
            <Link to="/prices" className="btn mb-10 ">
              BOOK MEMBERSHIP
            </Link>
          </div>
          <div className="mt-10">
            <img
              src={CardioBoxing1}
              alt=""
              className="w-full h-full object-cover "
            />
            <img
              src={CardioBoxing2}
              alt=""
              className="w-full xl:h-full h-[230px]  xl:mb-10 mt-5   xl:mt-5  object-cover"
            />
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default CardioBoxing;
