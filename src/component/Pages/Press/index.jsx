import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import Press1 from "./img/press1.avif";
import Press2 from "./img/press2.avif";

function Press() {
  return (
    <>
      <div className="bg-black xl:flex xl: items-center xl:justify-center">
        <div className=" text-white px-4 h-[1060px] xl:w-[1224px] xl:h-[940px] xl:flex xl:items-center xl:p-0 xl:justify-center    ">
          <div className="xl:w-[50%]">
            <h1 className="font-extrabold text-[32px] text-5xl">
              Press & Back
            </h1>
            <p className="font-sans text-[18px] my-8">Every Day 10:00 AM</p>
            <p className="font-sans xl:w-[503px]">
              There are few better full-body workouts available than our press
              and back classes. We welcome members of all abilities to our
              classes, and are always keen to help beginners make a start
            </p>
            <p className="font-sans my-8 xl:mb-28 xl:w-[503px]">
              If you can’t find a class at a time that suits you, please get in
              touch with us, since we often hold spontaneous classes which don’t
              make their way onto the official schedule.
            </p>
            <Link to="/prices" className="btn mb-10 ">
              BOOK MEMBERSHIP
            </Link>
          </div>
          <div className="mt-10">
            <img
              src={Press1}
              alt=""
              className="h-full w-full xl:w-[503px] xl:h-[403px] object-cover "
            />
            <img
              src={Press2}
              alt=""
              className="h-full w-full xl:w-[503px] xl:h-[403px]  xl:mt-5 mt-5  object-cover"
            />
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Press;
