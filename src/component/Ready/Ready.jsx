function Ready() {
  return (
    <div className="w-full h-[218px] xl:h-[432px] bg-white flex justify-center items-center z-10 px-4">
      <div className="w-[1224px] xl:h-full xl:flex xl:justify-center xl:flex-col">
        <h1 className="xl:text-5xl text-[32px] text-black font-extrabold mb-10 w-270px xl:w-[650px] leading-8 xl:mb-20">
          ARE YOU READY FOR CHANGES?
        </h1>
        <div className="mb-3">
          <a href="/signup" className="btn ">
            MAKE IT HAPPEN
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ready;
