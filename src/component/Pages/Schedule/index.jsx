import Ready from "../../Ready/Ready";

function Schedule() {
  return (
    <>
      <div className="bg-black">
        <div className=" text-white xl:flex xl:justify-center xl:items-center">
          <div className="xl:w-[1224px] xl:h-[240px] flex items-center w-full h-[125px] px-4">
            <h1 className="font-extrabold xl:text-[56px] text-4xl">SCHEDULE</h1>
          </div>
        </div>
        <div className="bg-black xl:h-[900px]">
          <div className="xl:flex xl:items-center xl:justify-center text-white px-4">
            <div className="xl:w-[1224px] h-[765px]  xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-y-40 xl:pt-[140px] ">
              <div className=" ">
                <h1 className="font-extrabold xl:text-5xl text-[32px] mt-10 xl:mt-0">
                  MONDAY
                </h1>
                <p className="font-sans xl:mt-10 mt-1">8:00 - 8:50</p>
                <p className="font-sans mb-5">Air yoga</p>
                <p className="font-sans">2:00 - 2:45</p>
                <p className="font-sans mb-5">Body building</p>
              </div>

              <div className=" ">
                <h1 className="font-extrabold xl:text-5xl text-[32px]">
                  TUESDAY
                </h1>
                <p className="font-sans xl:mt-10 mt-1">4:30 - 5:30</p>
                <p className="font-sans mb-5">Air yoga</p>
                <p className="font-sans">5:30 - 6:30</p>
                <p className="font-sans mb-5">Body building</p>
              </div>

              <div className=" ">
                <h1 className="font-extrabold xl:text-5xl text-[32px]">
                  WEDNESDAY
                </h1>
                <p className="font-sans xl:mt-10 mt-1">8:00 - 8:50</p>
                <p className="font-sans mb-5">Air yoga</p>
                <p className="font-sans">2:00 - 2:45</p>
                <p className="font-sans mb-5">Body building</p>
              </div>

              <div className=" ">
                <h1 className="font-extrabold xl:text-5xl text-[32px]">
                  THURSDAY
                </h1>
                <p className="font-sans xl:mt-10 mt-1">8:00 - 8:50</p>
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
