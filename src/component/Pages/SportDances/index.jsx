import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import SportDance1 from "./img/SportDance1.avif";
import SportDance2 from "./img/SportDance2.avif";

function SportDances() {
  return (
    <>
      <div className="bg-black md:flex md: items-center md:justify-center">
        <div className=" text-white px-4 h-[1080px] md:w-[1224px] md:h-[940px] md:flex md:items-center md:p-0 md:justify-center    ">
          <div className="md:w-[1224px]">
            <h1 className="font-extrabold text-[32px] md:text-5xl">
              Sport Dances
            </h1>
            <p className="font-sans text-[18px] my-8">Every Thursday 18:00</p>
            <p className="font-sans md:w-[503px]">
              Let your hair down and lose yourself to music in our
              high-intensity sport dance classes. With mood lighting, this class
              has been a hit ever since it was introduced.{" "}
            </p>
            <p className="font-sans my-8 md:mb-28 md:w-[503px]">
              We aim to combine dancing with cardio exercises in this class,
              meaning that even if you have two left feet, you can still break a
              sweat and enjoy the beat. Our top instructors make sure that
              everyone leaves this class with a big, wide grin on their face.
            </p>
            <Link to="/prices" className="btn mb-10 ">
              BOOK MEMBERSHIP
            </Link>
          </div>
          <div className="mt-10">
            <img
              src={SportDance1}
              alt=""
              className="w-full h-full object-cover "
            />
            <img
              src={SportDance2}
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

export default SportDances;
