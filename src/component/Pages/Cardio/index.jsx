import Ready from "../../Ready/Ready";
import Cardio1 from "./img/cardio1.avif";
import Cardio2 from "./img/cardio2.avif";

function Cardio() {
  return (
    <>
      <div className="bg-black xl:flex xl: items-center xl:justify-center">
        <div className=" text-white px-4 h-[1035px] xl:w-[1224px] xl:h-[940px] xl:flex xl:items-center xl:p-0 xl:justify-center    ">
          <div className="xl:w-[1224px]">
            <h1 className="font-extrabold text-[32px]">Cardio</h1>
            <p className="font-sans text-[18px] my-8">Every Day 8:00 PM</p>
            <p className="font-sans xl:w-[503px]">
              A solid cardio workout is the backbone of an effective workout
              regime, which is why we run cardio classes twice daily.{" "}
            </p>
            <p className="font-sans my-8 xl:mb-28 xl:w-[503px]">
              Whether you’re right at the start of a weight loss journey, or
              simply looking to tone up and keep fit, our cardio classes will
              put you through your paces and keep you on top form.
            </p>
            <a href="/prices" className="btn mb-10 ">
              BOOK NOW
            </a>
          </div>
          <div className="mt-10">
            <img src={Cardio1} alt="" className="w-full h-full object-cover " />
            <img
              src={Cardio2}
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

export default Cardio;
