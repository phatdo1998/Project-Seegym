import { Link } from "react-router-dom";
function Ready() {
  return (
    <div className="w-full h-[218px] md:h-[432px] bg-white flex justify-center items-center z-10 px-4">
      <div className="w-[1224px] md:h-full md:flex md:justify-center md:flex-col">
        <h1 className="md:text-5xl text-[32px] text-black font-extrabold mb-10 w-270px md:w-[650px] leading-8 md:mb-20">
          ARE YOU READY FOR CHANGES?
        </h1>
        <div className="mb-3">
          <Link to="/signup" className="btn ">
            MAKE IT HAPPEN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ready;
