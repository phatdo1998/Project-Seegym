import Ready from "../../Ready/Ready";

function Prices() {
  return (
    <>
      <div className="bg-black">
        <div className="xl:flex xl:justify-center xl:items-center md:flex md:justify-center md:items-center">
          <div className="h-[125px] md:w-[450px] w-[341px] text-white flex px-4 xl:px-0  xl:w-[1224px] xl:h-[240px] mt-[53px] mb-[35px] md:mt-[90px] ">
            <div className="flex items-center xl:justify-center md:px-4 ">
              <h1 className="text-[36px] font-extrabold xl:text-5xl xl:px-4">
                PRICES & PLANS
              </h1>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:items-center xl:justify-center ">
          <div className="md:flex md:justify-center md:items-center">
            <div className="bg-black w-[341px] md:px-8 md:w-[450px] h-[624px] text-white px-4 xl:grid xl:grid-cols-4 xl:w-[1224px] xl:h-[592px] xl:gap-x-10">
              <div className="xl:flex xl:flex-col xl:justify-center">
                <h1 className="text-[32px] font-extrabold xl:text-5xl">
                  BASIC
                </h1>
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
      </div>
      <Ready />
    </>
  );
}

export default Prices;
