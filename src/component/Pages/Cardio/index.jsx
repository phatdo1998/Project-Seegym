import Ready from "../../Ready/Ready";
import Cardio1 from "./img/cardio1.avif";
import Cardio2 from "./img/cardio2.avif";
import { Link } from "react-router-dom";

function Cardio() {
  return (
    <>
      <div className="bg-black xl:flex xl:items-center xl:justify-center ">
        <div className="md:flex md:justify-center md:items-center overflow-hidden">
          <div className=" text-white mt-[100px] px-4 md:w-[414px] md:h-[1020px] h-[1030px] xl:w-[1224px] xl:h-[887px] xl:flex xl:items-center xl:p-0 xl:justify-center md:mt-[150px] xl:mt-[50px]">
            <div className="xl:w-[50%] md:w-[414px] ">
              <h1 className="font-extrabold text-[32px] xl:text-5xl md:w-full">
                Cardio
              </h1>
              <p className="font-sans text-[18px] my-8">Every Day 8:00 PM</p>
              <p className="font-sans xl:w-[503px]">
                A solid cardio workout is the backbone of an effective workout
                regime, which is why we run cardio classes twice daily.
              </p>
              <p className="font-sans my-8 md:mt-8 md:mb-20 xl:mb-28 xl:w-[503px]">
                Whether you’re right at the start of a weight loss journey, or
                simply looking to tone up and keep fit, our cardio classes will
                put you through your paces and keep you on top form.
              </p>
              <Link to="/prices" className="btn my-10 ">
                BOOK MEMBERSHIP
              </Link>
            </div>
            <div className="mt-10  md:w-[414px] xl:w-[496px] xl:h-[432px] md:flex md:justify-center md:items-center md:flex-col">
              <img
                src={Cardio1}
                alt=""
                className="w-full h-full xl:w-[502px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
              <img
                src={Cardio2}
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

export default Cardio;
