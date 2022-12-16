import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import BodyBuilding1 from "./img/BodyBuilding1.avif";
import BodyBuilding2 from "./img/BodyBuilding2.avif";

function BodyBuilding() {
  return (
    <>
      <div className="bg-black xl:flex xl:items-center xl:justify-center ">
        <div className="md:flex md:justify-center md:items-center overflow-hidden">
          <div className=" text-white px-4 mt-[100px] md:w-[414px] md:h-[1035px] h-[1055px] xl:w-[1224px] xl:h-[887px] xl:flex xl:items-center xl:p-0 xl:justify-center md:mt-[150px] xl:mt-[50px]">
            <div className="xl:w-[50%] md:w-[414px] ">
              <h1 className="font-extrabold text-[32px] xl:text-5xl md:w-full">
                Body Building
              </h1>
              <p className="font-sans text-[18px] my-8">
                Every Monday and Wednesday 14:00
              </p>
              <p className="font-sans xl:w-[503px]">
                Want to tone, get muscle definition, and feel stronger in your
                everyday life? Then our body-building classes are made for you.
              </p>
              <p className="font-sans my-8 md:mt-8 md:mb-20 xl:mb-28 xl:w-[503px]">
                You’ll be walked through a set of exercises together with our
                top coaches at the start of the class with different rotations
                and number of repetitions as the weeks go by. Pair this with our
                cardio and cardio boxing classes for maximum effect.
              </p>
              <Link to="/prices" className="btn my-10 ">
                BOOK MEMBERSHIP
              </Link>
            </div>
            <div className="mt-10  md:w-[414px] xl:w-[496px] xl:h-[432px] md:flex md:justify-center md:items-center md:flex-col">
              <img
                src={BodyBuilding1}
                alt=""
                className="w-full h-full xl:w-[502px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
              <img
                src={BodyBuilding2}
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

export default BodyBuilding;
