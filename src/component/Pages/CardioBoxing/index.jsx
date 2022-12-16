import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import CardioBoxing1 from "./img/CardioBoxing1.avif";
import CardioBoxing2 from "./img/CardioBoxing2.webp";

function CardioBoxing() {
  return (
    <>
      <div className="bg-black xl:flex xl:items-center xl:justify-center ">
        <div className="md:flex md:justify-center md:items-center overflow-hidden">
          <div className=" text-white mt-[100px] px-4 md:w-[414px] md:h-[990px] h-[1070px] xl:w-[1224px] xl:h-[887px] xl:flex xl:items-center xl:p-0 xl:justify-center md:mt-[150px] xl:mt-[50px]">
            <div className="xl:w-[50%] md:w-[414px] ">
              <h1 className="font-extrabold text-[32px] xl:text-5xl md:w-full">
                Cardio Boxing
              </h1>
              <p className="font-sans text-[18px] my-8">
                Every Monday and Friday 17:00
              </p>

              <p className="font-sans my-8 md:mt-8 md:mb-20 xl:mb-28 xl:w-[503px]">
                Sometimes nothing feels as good as putting on your gloves and
                kicking the crap out of a boxing bag or a set of pads. In our
                cardio boxing classes, we’ll focus on great technique and build
                stamina through boxing-inspired routines. There won’t be any
                contact exercises, meaning that you can get the benefits of a
                boxing workout without the fear of breaking someone’s nose.
              </p>
              <Link to="/prices" className="btn my-10 ">
                BOOK MEMBERSHIP
              </Link>
            </div>
            <div className="mt-10 xl:w-1/2 md:w-[414px]  xl:h-[432px] md:flex md:justify-center md:items-center md:flex-col">
              <img
                src={CardioBoxing1}
                alt=""
                className="w-full h-[300px]  xl:h-[503px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
              <img
                src={CardioBoxing2}
                alt=""
                className="w-full h-[300px]  xl:h-[603px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default CardioBoxing;
