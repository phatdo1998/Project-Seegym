import Ready from "../../Ready/Ready";

function Schedule() {
  return (
    <>
      <div className="bg-black">
        <div className=" text-white md:flex md:justify-center md:items-center">
          <div className="md:w-[1224px] md:h-[240px] flex items-center w-full h-[125px] px-4">
            <h1 className="font-extrabold md:text-[56px] text-4xl">SCHEDULE</h1>
          </div>
        </div>
        <div className="bg-black md:h-[900px]">
          <div className="md:flex md:items-center md:justify-center text-white px-4">
            <div className="md:w-[1224px] h-[765px]  md:grid md:grid-cols-2 md:grid-rows-2 md:gap-y-40 md:pt-[140px] ">
              <div className=" ">
                <h1 className="font-extrabold md:text-5xl text-[32px] mt-10 md:mt-0">
                  MONDAY
                </h1>
                <p className="font-sans md:mt-10 mt-1">8:00 - 8:50</p>
                <p className="font-sans mb-5">Air yoga</p>
                <p className="font-sans">2:00 - 2:45</p>
                <p className="font-sans mb-5">Body building</p>
              </div>

              <div className=" ">
                <h1 className="font-extrabold md:text-5xl text-[32px]">
                  TUESDAY
                </h1>
                <p className="font-sans md:mt-10 mt-1">4:30 - 5:30</p>
                <p className="font-sans mb-5">Air yoga</p>
                <p className="font-sans">5:30 - 6:30</p>
                <p className="font-sans mb-5">Body building</p>
              </div>

              <div className=" ">
                <h1 className="font-extrabold md:text-5xl text-[32px]">
                  WEDNESDAY
                </h1>
                <p className="font-sans md:mt-10 mt-1">8:00 - 8:50</p>
                <p className="font-sans mb-5">Air yoga</p>
                <p className="font-sans">2:00 - 2:45</p>
                <p className="font-sans mb-5">Body building</p>
              </div>

              <div className=" ">
                <h1 className="font-extrabold md:text-5xl text-[32px]">
                  THURSDAY
                </h1>
                <p className="font-sans md:mt-10 mt-1">8:00 - 8:50</p>
                <p className="font-sans mb-5">Air yoga</p>
                <p className="font-sans">5:30 - 6:30</p>
                <p className="font-sans mb-5">Body building</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Schedule;
