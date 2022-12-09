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
      <div className="bg-black ">
        <div className="md:flex md:justify-center md:items-center">
          <div className="h-[125px] w-[341px] text-white flex px-4 md:px-0 md:w-[1224px] md:h-[240px] mt-[53px] mb-[35px] ">
            <div className="flex items-center ">
              <h1 className="text-[36px] font-extrabold md:text-5xl">
                CLASSES
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black text-white px-4 h-[3055px] md:h-[2288px] md:flex  md:justify-center md:items-center ">
          <div className="md:w-[1224px] md:h-[2288px]  md:grid md:grid-cols-2 md:gap-x-48 md:gap-y-0">
            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={Callanetics}
                alt=""
                className=" h-[309px] object-cover mb-4 x md:w-[503px] md:h-[368px]l:w-[503px] md:h-[368px]"
              />
              <Link
                to="/callanetics"
                className="text-2xl font-bold underline md:text-[30px]"
              >
                Callanetics
              </Link>
            </div>

            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={Yoga}
                alt=""
                className="h-[309px] object-cover mb-4 md:w-[503px] md:h-[368px]"
              />
              <Link
                to="/yoga"
                className="text-2xl font-bold underline md:text-[30px]"
              >
                Air Yoga
              </Link>
            </div>

            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={CardioBoxing}
                alt=""
                className="h-[309px] object-cover mb-4 md:w-[503px] md:h-[368px]"
              />
              <Link
                to="/cardioBoxing"
                className="text-2xl font-bold underline md:text-[30px]"
              >
                Cardio Boxing
              </Link>
            </div>

            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={Lifting}
                alt=""
                className="h-[309px] object-cover mb-4 md:w-[503px] md:h-[368px]"
              />
              <Link
                to="/lifting"
                className="text-2xl font-bold underline md:text-[30px]"
              >
                Lifting
              </Link>
            </div>

            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={Cardio}
                alt=""
                className="h-[309px] object-cover mb-4 md:w-[503px] md:h-[368px]"
              />
              <Link
                to="/cardio"
                className="text-2xl font-bold underline md:text-[30px]"
              >
                Cardio
              </Link>
            </div>

            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={SportDance}
                alt=""
                className="h-[309px] object-cover mb-4 md:w-[503px] md:h-[368px]"
              />
              <Link
                to="/sportDances"
                className="text-2xl font-bold underline md:text-[30px]"
              >
                Sport Dances
              </Link>
            </div>

            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={Body}
                alt=""
                className="h-[309px] object-cover mb-4 md:w-[503px] md:h-[368px]"
              />
              <Link
                to="/bodyBuilding"
                className="text-2xl font-bold underline md:text-[30px]"
              >
                Body Building
              </Link>
            </div>

            <div className="mb-6 md:w-[503px] md:h-[368px]">
              <img
                src={Press}
                alt=""
                className="h-[309px] object-cover mb-4 md:w-[503px] md:h-[368px]"
              />
              <Link
                to="/press"
                className="text-2xl font-bold underline md:text-[30px]"
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
