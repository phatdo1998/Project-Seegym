import { Link } from "react-router-dom";
function Ready() {
  return (
    <div className="w-full h-[218px] lg:h-[432px] bg-white flex justify-center items-center z-10 px-4">
      <div className="w-[1224px] md:w-[414px] lg:w-[1224px] lg:h-full lg:flex lg:justify-center lg:flex-col  ">
        <div className="md:w-[414px]">
          <h1 className="lg:text-5xl text-[32px] text-black font-extrabold mb-10 w-270px lg:w-[650px] leading-8 lg:mb-20">
            ARE YOU READY FOR CHANGES?
          </h1>
          <div className="mb-3">
            <Link to="/signup" className="btn ">
              MAKE IT HAPPEN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
