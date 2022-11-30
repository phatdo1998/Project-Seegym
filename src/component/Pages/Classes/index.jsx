import Callanetics from "./img/Callanetics.avif";
import Yoga from "./img/Rectangle-dWj8XKyZe2iMWL9W.avif";
import SportDance from "./img/Sport Dances.avif";
import Lifting from "./img/Lifting.avif";
import CardioBoxing from "./img/Cardio Boxing.avif";
import Cardio from "./img/Cadio.avif";
import Press from "./img/Press & Back.avif";
import Body from "./img/Body Building.avif";
import Ready from "../../Ready/Ready";

function Classes() {
  return (
    // <>
    //   <div className="bg-black flex justify-center">
    //     <div className="xl:w-[1224px] xl:h-full w-[397px] h-[125px] px-4 xl:px-0 text-white">
    //       <div className=" xl:h-[240px] xl:w-full xl:flex xl:items-center">
    //         <h1 className="font-extrabold text-[56px]">CLASSES</h1>
    //       </div>
    //       <div className=" w-[397px] xl:w-full xl:h-[2288px] h-[2888px] bg-black xl:grid xl:grid-cols-2 xl:gap-x-60 xl:mt-28 ">
    //         <div className="xl:h-[368px] xl:w-[503px] mb-6 ">
    //           <img
    //             src={Callanetics}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover xl:mb-6  "
    //             font-e
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Callanetics
    //           </a>
    //         </div>
    //         <div className="xl:h-[368px] xl:w-[503px] xl:gap-x-10 mb-6">
    //           <img
    //             src={Yoga}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover mb-6"
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Air Yoga
    //           </a>
    //         </div>

    //         <div className="xl:h-[368px] xl:w-[503px] mb-6">
    //           <img
    //             src={SportDance}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover mb-6"
    //             font-extrabold
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Sport Dance
    //           </a>
    //         </div>

    //         <div className="xl:h-[368px] xl:w-[503px] mb-6">
    //           <img
    //             src={Lifting}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover mb-6"
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Lifting
    //           </a>
    //         </div>

    //         <div className="xl:h-[368px] xl:w-[503px] mb-6">
    //           <img
    //             src={CardioBoxing}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover mb-6"
    //             font-extrabold
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Cardio Boxing
    //           </a>
    //         </div>

    //         <div className="xl:h-[368px] xl:w-[503px] mb-6">
    //           <img
    //             src={Cardio}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover mb-6"
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Cardio
    //           </a>
    //         </div>

    //         <div className="xl:h-[368px] xl:w-[503px] mb-6">
    //           <img
    //             src={Press}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover mb-6"
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Press & Back
    //           </a>
    //         </div>

    //         <div className="xl:h-[368px] xl:w-[503px] mb-6">
    //           <img
    //             src={Body}
    //             alt=""
    //             className="xl:h-full xl:w-full w-[365px] h-[283px] object-cover mb-6"
    //           />
    //           <a href="/" className="text-3xl underline font-extrabold">
    //             Body Building
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <Ready /> */}
    // </>

    <>
      <div className="bg-black ">
        <div className="xl:flex xl:justify-center xl:items-center">
          <div className="h-[125px] w-[341px] text-white flex px-4 xl:px-0 xl:w-[1224px] xl:h-[240px] ">
            <div className="flex items-center ">
              <h1 className="text-[36px] font-extrabold xl:text-5xl">
                CLASSES
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black text-white px-4 h-[3055px] xl:h-[2288px] xl:flex  xl:justify-center xl:items-center ">
          <div className="xl:w-[1224px] xl:h-[2288px]  xl:grid xl:grid-cols-2 xl:gap-x-48 xl:gap-y-0">
            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Callanetics}
                alt=""
                className=" h-[309px] object-cover mb-4 x xl:w-[503px] xl:h-[368px]l:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Callanetics
              </a>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Yoga}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Air Yoga
              </a>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={CardioBoxing}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Cardio Boxing
              </a>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Lifting}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Lifting
              </a>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Cardio}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Cardio
              </a>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={SportDance}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Sport Dances
              </a>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Body}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Body Building
              </a>
            </div>

            <div className="mb-6 xl:w-[503px] xl:h-[368px]">
              <img
                src={Press}
                alt=""
                className="h-[309px] object-cover mb-4 xl:w-[503px] xl:h-[368px]"
              />
              <a
                href="/"
                className="text-2xl font-bold underline xl:text-[30px]"
              >
                Press & Back
              </a>
            </div>
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Classes;
