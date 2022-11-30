import Ready from "../../Ready/Ready";
import Press1 from "./img/press1.avif";
import Press2 from "./img/press2.avif";

function Press() {
  return (
    <>
      <div className="bg-black xl:flex xl: items-center xl:justify-center">
        <div className=" text-white px-4 h-[970px] xl:w-[1224px] xl:h-[940px] xl:flex xl:items-center xl:p-0 xl:justify-center    ">
          <div className="xl:w-[50%]">
            <h1 className="font-extrabold text-[32px]">Lifting</h1>
            <p className="font-sans text-[18px] my-8">Every Day 21:00</p>
            <p className="font-sans xl:w-[503px]">
              Lifting isn’t just about strength. While you will build great
              core, arm, and leg muscles while lifting, you’ll also develop
              better coordination and an understanding of how your body
              interacts with the world.
            </p>
            <p className="font-sans my-8 xl:mb-28 xl:w-[503px]">
              Whether you’re already an experienced weightlifter, or have never
              picked up a dumbbell in your life, you’ll find a lot of value in
              our classes.
            </p>
            <a href="/prices" className="btn mb-10 ">
              BOOK NOW
            </a>
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
