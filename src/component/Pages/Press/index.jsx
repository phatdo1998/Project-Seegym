import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import Press1 from "./img/press1.avif";
import Press2 from "./img/press2.avif";

function Press() {
  return (
    <>
      <div className="bg-black xl:flex xl:items-center xl:justify-center ">
        <div className="md:flex md:justify-center md:items-center overflow-hidden">
          <div className=" text-white px-4 md:w-[414px] md:h-[1035px] h-[1055px] xl:w-[1224px] xl:h-[887px] xl:flex xl:items-center xl:p-0 xl:justify-center md:mt-[150px] xl:mt-[50px]">
            <div className="xl:w-[50%] md:w-[414px] ">
              <h1 className="font-extrabold text-[32px] xl:text-5xl md:w-full">
                Press & Back
              </h1>
              <p className="font-sans text-[18px] my-8">Every Day 10:00 AM</p>
              <p className="font-sans xl:w-[503px]">
                There are few better full-body workouts available than our press
                and back classes. We welcome members of all abilities to our
                classes, and are always keen to help beginners make a start
              </p>
              <p className="font-sans my-8 md:mt-8 md:mb-20 xl:mb-28 xl:w-[503px]">
                If you can’t find a class at a time that suits you, please get
                in touch with us, since we often hold spontaneous classes which
                don’t make their way onto the official schedule.
              </p>
              <Link to="/prices" className="btn my-10 ">
                BOOK MEMBERSHIP
              </Link>
            </div>
            <div className="mt-10  md:w-[414px] xl:w-[496px] xl:h-[432px] md:flex md:justify-center md:items-center md:flex-col">
              <img
                src={Press1}
                alt=""
                className="w-full h-full xl:w-[502px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
              <img
                src={Press2}
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

export default Press;
