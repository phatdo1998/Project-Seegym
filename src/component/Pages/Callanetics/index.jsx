import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import Callanetics1 from "./img/Callanetics1.avif";
import Callanetics2 from "./img/Callanetics2.avif";

function Callanetics() {
  return (
    <>
      <div className="bg-black md:flex md: items-center md:justify-center">
        <div className=" text-white px-4 h-[1035px] md:w-[1224px] md:h-[940px] md:flex md:items-center md:p-0 md:justify-center    ">
          <div className="md:w-[1224px]">
            <h1 className="font-extrabold text-[32px] md:text-5xl">
              Callanetics
            </h1>
            <p className="font-sans text-[18px] my-8">Every Tuesday at 16:00</p>
            <p className="font-sans md:w-[503px]">
              Callanetics is the ideal form of exercise for anyone who wants to
              avoid high-impact but tone up all the same.{" "}
            </p>
            <p className="font-sans my-8 md:mb-28 md:w-[503px]">
              Focusing on working the deep muscles, this class helps you achieve
              better posture and safeguards you from developing injuries that
              come with a weak core. Our callanetics classes are open for all
              ages.
            </p>
            <Link to="/prices" className="btn mb-10 ">
              BOOK MEMBERSHIP
            </Link>
          </div>
          <div className="mt-10">
            <img
              src={Callanetics1}
              alt=""
              className="w-full h-full object-cover "
            />
            <img
              src={Callanetics2}
              alt=""
              className="w-full h-full  md:mb-10 mt-5   md:mt-5  object-cover"
            />
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Callanetics;
