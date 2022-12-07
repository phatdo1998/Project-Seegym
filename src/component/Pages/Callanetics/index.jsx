import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import Callanetics1 from "./img/Callanetics1.avif";
import Callanetics2 from "./img/Callanetics2.avif";

function Callanetics() {
  return (
    <>
      <div className="bg-black xl:flex xl: items-center xl:justify-center">
        <div className=" text-white px-4 h-[1035px] xl:w-[1224px] xl:h-[940px] xl:flex xl:items-center xl:p-0 xl:justify-center    ">
          <div className="xl:w-[1224px]">
            <h1 className="font-extrabold text-[32px] xl:text-5xl">
              Callanetics
            </h1>
            <p className="font-sans text-[18px] my-8">Every Tuesday at 16:00</p>
            <p className="font-sans xl:w-[503px]">
              Callanetics is the ideal form of exercise for anyone who wants to
              avoid high-impact but tone up all the same.{" "}
            </p>
            <p className="font-sans my-8 xl:mb-28 xl:w-[503px]">
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
              className="w-full h-full  xl:mb-10 mt-5   xl:mt-5  object-cover"
            />
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Callanetics;
