import { Link } from "react-router-dom";
import Ready from "../../Ready/Ready";
import SportDance1 from "./img/SportDance1.avif";
import SportDance2 from "./img/SportDance2.avif";

function SportDances() {
  return (
    <>
      <div className="bg-black xl:flex xl:items-center xl:justify-center ">
        <div className="md:flex md:justify-center md:items-center overflow-hidden">
          <div className=" text-white px-4 md:w-[414px] md:h-[1035px] h-[1080px] xl:w-[1224px] xl:h-[887px] xl:flex xl:items-center xl:p-0 xl:justify-center md:mt-[150px] xl:mt-[50px]">
            <div className="xl:w-[50%] md:w-[414px] ">
              <h1 className="font-extrabold text-[32px] xl:text-5xl md:w-full">
                Sport Dances
              </h1>
              <p className="font-sans text-[18px] my-8">Every Thursday 18:00</p>
              <p className="font-sans xl:w-[503px]">
                Let your hair down and lose yourself to music in our
                high-intensity sport dance classes. With mood lighting, this
                class has been a hit ever since it was introduced.
              </p>
              <p className="font-sans my-8 md:mt-8 md:mb-20 xl:mb-28 xl:w-[503px]">
                We aim to combine dancing with cardio exercises in this class,
                meaning that even if you have two left feet, you can still break
                a sweat and enjoy the beat. Our top instructors make sure that
                everyone leaves this class with a big, wide grin on their face.
              </p>
              <Link to="/prices" className="btn my-10 ">
                BOOK MEMBERSHIP
              </Link>
            </div>
            <div className="mt-10  md:w-[414px] xl:w-[496px] xl:h-[432px] md:flex md:justify-center md:items-center md:flex-col">
              <img
                src={SportDance1}
                alt=""
                className="w-full h-full xl:w-[502px] xl:h-[403px] md:h-[234px] xl:mt-5 mt-5  object-cover"
              />
              <img
                src={SportDance2}
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

export default SportDances;
