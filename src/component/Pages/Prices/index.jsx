import Ready from "../../Ready/Ready";

function Prices() {
  return (
    // <>
    //   <div className="bg-black">
    //     <div className=" text-white flex xl:justify-center items-center px-4">
    //       <div className="xl:w-[1224px] xl:h-[240px] xl:flex xl:items-center w-[307px] h-[125px]">
    //         <h1 className="font-extrabold xl:text-[56px] text-4xl">
    //           PRICES & PLANS
    //         </h1>
    //       </div>
    //     </div>
    //     <div className="bg-black ">
    //       <div className="xl:flex items-center xl:justify-center text-white">
    //         <div className=" xl:h-[592px] xl:w-[1224px] xl:flex xl:items-center xl:flex-col xl:pt-[130px] ">
    //           <div className="grid grid-cols-4 gap-x-40 ">
    //             <h1 className="text-5xl font-extrabold">BASIC</h1>
    //             <h1 className="text-[38px] ">30$</h1>
    //             <h1 className="text-5xl font-extrabold">UNLIMITED</h1>
    //             <h1 className="text-[38px]">50$</h1>
    //           </div>

    //           <div className="w-full h-full grid grid-cols-2 gap-x-40 font-sans">
    //             <div className="">
    //               <p className="my-10">INCLUDED:</p>
    //               <div className="">
    //                 <p className="">• 2x group workouts of your choice</p>
    //                 <p className="">• Unlimited gym access</p>
    //                 <p className="">• Personal workout</p>
    //               </div>
    //             </div>

    //             <div className="">
    //               <p className="my-10">INCLUDED:</p>
    //               <div className="">
    //                 <p className="">• 2x group workouts of your choice</p>
    //                 <p className="">• Unlimited gym access</p>
    //                 <p className="">• 3x personal workouts</p>
    //                 <p className="">• Personal workout</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Ready />
    // </>
    <>
      <div className="bg-black">
        <div className="xl:flex xl:justify-center xl:items-center">
          <div className="w-[341px h-[125px] flex items-center px-4 text-white xl:w-[1224px] xl:h-[240px]">
            <h1 className="text-4xl font-extrabold xl:text-[56px]">
              PRICES & PLANS
            </h1>
          </div>
        </div>
        <div className="xl:flex xl:items-center xl:justify-center">
          <div className="bg-black w-[341px] h-[624px] text-white px-4 xl:grid xl:grid-cols-4 xl:w-[1224px] xl:h-[592px] xl:gap-x-10">
            <div className="xl:flex xl:flex-col xl:justify-center">
              <h1 className="text-[32px] font-extrabold xl:text-5xl">BASIC</h1>
              <p className="my-2 font-sans xl:my-10">INCLUDED:</p>
              <p className="font-sans mt-[2.5rem] xl:mt-0">
                • 2x group workouts of your choice
              </p>
              <p className="font-sans">• Unlimited gym access</p>
              <p className="font-sans">• Personal workout</p>
            </div>
            <div className="text-[28px] my-5 xl:text-[38px] xl:flex xl:flex-col xl:justify-center xl:h-[375px]">
              30$
            </div>
            <div className="xl:flex xl:flex-col xl:justify-center">
              <h1 className="text-[32px] font-extrabold  xl:text-5xl">
                UNLIMITED
              </h1>
              <p className="font-sans my-2 xl:my-10">INCLUDED:</p>
              <p className="font-sans mt-[2.5rem] xl:mt-0">
                • 2x group workouts of your choice
              </p>
              <p className="font-sans">• Unlimited gym access</p>
              <p className="font-sans">• 3x personal workouts</p>
              <p className="font-sans">• Personal nutrition plan</p>
            </div>
            <div className="text-[28px] py-5  xl:text-[38px] my-5  xl:flex xl:flex-col xl:justify-center xl:h-[357px]">
              50$
            </div>
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Prices;
