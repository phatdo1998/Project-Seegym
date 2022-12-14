import Callanetics from "./img/Callanetics.avif";
import Yoga from "./img/Rectangle-dWj8XKyZe2iMWL9W.avif";
import SportDance from "./img/Sport Dances.avif";
import Lifting from "./img/Lifting.avif";
import CardioBoxing from "./img/Cardio Boxing.avif";
import Cardio from "./img/Cadio.avif";
import Press from "./img/Press & Back.avif";
import Body from "./img/Body Building.avif";
import Ready from "../../Ready/Ready";

import { Link } from "react-router-dom";

function Classes() {
  return (
    <>
      <div className="bg-black md:flex md:flex-col md:justify-center md:items-center">
        <div className="xl:flex xl:justify-center xl:items-center">
          <div className="h-[125px] md:w-[750px] w-[341px] text-white flex px-4 xl:px-0 xl:w-[1224px] xl:h-[240px] mt-[53px] mb-[35px] md:mt-[100px] ">
            <div className="flex items-center md:justify-center md:w-[414px] xl:w-auto md:ml-6">
              <h1 className="text-[36px] font-extrabold xl:text-5xl md:px-4 xl:px-0">
                CLASSES
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black text-white md:pl-14 px-4 h-[3055px] xl:h-[2288px] xl:flex  xl:justify-center xl:items-center ">
          <div className="xl:w-[1224px] xl:h-[2288px]  xl:grid xl:grid-cols-2 xl:gap-x-48 xl:gap-y-0">
            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Callanetics}
                alt=""
                className=" h-[309px] object-cover mb-4 x xl:w-[503px] xl:h-[368px]l:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/callanetics"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Callanetics
              </Link>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Yoga}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/yoga"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Air Yoga
              </Link>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={CardioBoxing}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/cardioBoxing"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Cardio Boxing
              </Link>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Lifting}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/lifting"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Lifting
              </Link>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Cardio}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/cardio"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Cardio
              </Link>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={SportDance}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/sportDances"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Sport Dances
              </Link>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Body}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/bodyBuilding"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Body Building
              </Link>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Press}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <Link
                to="/press"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Press & Back
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Classes;
