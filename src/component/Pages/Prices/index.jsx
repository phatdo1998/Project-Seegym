import Ready from "../../Ready/Ready";

function Prices() {
  return (
    <>
      <div className="bg-black">
        <div className="md:flex md:justify-center md:items-center">
          <div className="w-[341px h-[125px] flex items-center px-4 text-white md:w-[1224px] md:h-[240px] mt-[53px] mb-[35px]">
            <h1 className="text-4xl font-extrabold md:text-[56px]">
              PRICES & PLANS
            </h1>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center">
          <div className="bg-black w-[341px] h-[624px] text-white px-4 md:grid md:grid-cols-4 md:w-[1224px] md:h-[592px] md:gap-x-10">
            <div className="md:flex md:flex-col md:justify-center">
              <h1 className="text-[32px] font-extrabold md:text-5xl">BASIC</h1>
              <p className="my-2 font-sans md:my-10">INCLUDED:</p>
              <p className="font-sans mt-[2.5rem] md:mt-0">
                • 2x group workouts of your choice
              </p>
              <p className="font-sans">• Unlimited gym access</p>
              <p className="font-sans">• Personal workout</p>
            </div>
            <div className="text-[28px] my-5 md:text-[38px] md:flex md:flex-col md:justify-center md:h-[375px]">
              30$
            </div>
            <div className="md:flex md:flex-col md:justify-center">
              <h1 className="text-[32px] font-extrabold  md:text-5xl">
                UNLIMITED
              </h1>
              <p className="font-sans my-2 md:my-10">INCLUDED:</p>
              <p className="font-sans mt-[2.5rem] md:mt-0">
                • 2x group workouts of your choice
              </p>
              <p className="font-sans">• Unlimited gym access</p>
              <p className="font-sans">• 3x personal workouts</p>
              <p className="font-sans">• Personal nutrition plan</p>
            </div>
            <div className="text-[28px] py-5  md:text-[38px] my-5  md:flex md:flex-col md:justify-center md:h-[357px]">
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
