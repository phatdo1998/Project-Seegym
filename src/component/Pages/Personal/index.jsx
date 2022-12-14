import Matthew from "./img/MATTHEW HERON.avif";
import John from "./img/JOHN HEERON.avif";
import Inna from "./img/INNA GEBROW.avif";
import Ready from "../../Ready/Ready";

function Personal(props) {
  const { isMobile } = props;

  return (
    <>
      <div className=" bg-black overflow-hidden  xl:h-full">
        <div className="xl:flex xl:justify-center xl:items-center md:flex md:justify-center md:items-center">
          <div className="h-[125px] md:w-[487px] w-[341px] text-white flex px-4 xl:px-0 xl:w-[1224px] xl:h-[240px] mt-[53px] mb-[35px] md:mt-[100px] ">
            <div className="flex items-center md:justify-center md:w-[382px] xl:w-auto   ">
              <h1 className="text-[36px] font-extrabold xl:text-5xl md:px-4">
                PERSONAL TRAINERS
              </h1>
            </div>
          </div>
        </div>

        {isMobile ? (
          <>
            <div className="w-full xl:h-full h-[1020px] bg-black xl:flex xl:justify-center xl:items-center  ">
              <div className="w-[1224px] md:w-full h-[752px] text-white xl:grid xl:grid-cols-2 xl:gap-x-40 ">
                <div className="flex flex-col justify-center px-4 w-full md:flex md:justify-center md:items-center ">
                  <h2 className="md:text-3xl text-2xl font-extrabold md:w-[382px]">
                    MATTHEW HERON
                  </h2>
                  <p className=" font-sans text-[16px] my-5 xl:w-[540px] w-[380px] md:w-[382px]">
                    Mathew is the expert to talk to if your fitness goal is to
                    lose weight or tone up. Working clients through
                    high-intensity workouts and tailored fitness plans, Mat
                    doesn’t take no for an answer when it comes to your goals.
                  </p>
                  <p className="font-sans text-[16px] xl:w-[540px] w-[380px] mb-10 md:w-[382px]">
                    With a background in sports psychology and physical therapy,
                    Matt understands how the mind and body need to work together
                    for you to achieve success.
                  </p>
                  <div className="">
                    <img
                      src={Matthew}
                      alt=""
                      className="md:w-[382px] xl:h-[750px]  h-[579px] object-cover"
                    />
                  </div>
                  <a href="/" className="btn mt-10 w-[237px]">
                    SCHEDULE WORKOUT
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full xl:h-full h-[1020px]  bg-black xl:flex xl:justify-center xl:items-center md:mt-[90px] ">
              <div className="w-[1224px] md:w-full h-[752px] text-white xl:grid xl:grid-cols-2 xl:gap-x-40 ">
                <div className="flex flex-col justify-center px-4 w-full md:flex md:justify-center md:items-center ">
                  <h2 className="md:text-3xl text-2xl font-extrabold md:w-[382px]">
                    JOHN HEERON
                  </h2>
                  <p className=" font-sans text-[16px] my-5 xl:w-[540px] w-[380px] md:w-[382px]">
                    Whether you’re new to boxing or a seasoned fighter, John can
                    teach you a thing or two about keeping fit for the ring and
                    understanding your opponent.
                  </p>
                  <p className="font-sans text-[16px] xl:w-[540px] w-[380px] mb-10 md:w-[382px]">
                    While he comes from the world of professional boxing, John
                    takes a holistic approach to fitness, and is just as likely
                    to throw you into a yoga class as he is to throw you around
                    the boxing ring.
                  </p>
                  <div className="">
                    <img
                      src={John}
                      alt=""
                      className="md:w-[382px] xl:h-[750px]  h-[579px] object-cover"
                    />
                  </div>
                  <a href="/" className="btn mt-10 w-[237px]">
                    SCHEDULE WORKOUT
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full xl:h-full h-[1020px]  bg-black xl:flex xl:justify-center xl:items-center md:mt-[40px]  ">
              <div className="w-[1224px] md:w-full h-[752px] text-white xl:grid xl:grid-cols-2 xl:gap-x-40 ">
                <div className="flex flex-col justify-center px-4 w-full md:flex md:justify-center md:items-center ">
                  <h2 className="md:text-3xl text-2xl font-extrabold md:w-[382px]">
                    INNA GEBROW
                  </h2>
                  <p className=" font-sans text-[16px] my-5 xl:w-[540px] w-[380px] md:w-[382px]">
                    Are you looking to improve your and joint strength? Then you
                    should get in touch within Inna for a consultation.
                  </p>
                  <p className="font-sans text-[16px] xl:w-[540px] w-[380px] mb-10 md:w-[382px]">
                    A highly trained instructor for both yoga and pilates, Inna
                    can help you better understand your own body, and will help
                    guide you towards your goals in a way that works with your
                    body instead of against it.
                  </p>
                  <div className="">
                    <img
                      src={Inna}
                      alt=""
                      className="md:w-[382px] xl:h-[750px]  h-[579px] object-cover"
                    />
                  </div>
                  <a href="/" className="btn mt-10 w-[237px]">
                    SCHEDULE WORKOUT
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full xl:h-full h-[1020px]  bg-black xl:flex xl:justify-center xl:items-center">
              <div className="w-[1224px] h-[752px] text-white xl:grid xl:grid-cols-2 xl:gap-x-40">
                <div className="flex flex-col justify-center px-4 w-full">
                  <h2 className="md:text-3xl text-2xl font-extrabold">
                    MATTHEW HERON
                  </h2>
                  <p className=" font-sans text-[16px] my-5 xl:w-[540px] w-[380px]">
                    Mathew is the expert to talk to if your fitness goal is to
                    lose weight or tone up. Working clients through
                    high-intensity workouts and tailored fitness plans, Mat
                    doesn’t take no for an answer when it comes to your goals.
                  </p>
                  <p className="font-sans text-[16px] xl:w-[540px] w-[380px]">
                    With a background in sports psychology and physical therapy,
                    Matt understands how the mind and body need to work together
                    for you to achieve success.
                  </p>

                  <a href="/" className="btn mt-20 w-[237px]">
                    SCHEDULE WORKOUT
                  </a>
                </div>
                <div className="px-4">
                  <img
                    src={Matthew}
                    alt=""
                    className="md:w-[382px] xl:h-[750px]  h-[579px] object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full xl:h-full h-[1020px]  bg-black xl:flex xl:justify-center xl:items-center">
              <div className="w-[1224px] h-[752px] text-white xl:grid xl:grid-cols-2 xl:gap-x-40">
                <div className="">
                  <img
                    src={John}
                    alt=""
                    className="md:w-[382px] xl:h-[750px]  h-[579px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center px-4 w-full">
                  <h2 className="md:text-3xl text-2xl font-extrabold">
                    JOHN HEERON
                  </h2>
                  <p className=" font-sans text-[16px] my-5 xl:w-[540px] w-[380px]">
                    Whether you’re new to boxing or a seasoned fighter, John can
                    teach you a thing or two about keeping fit for the ring and
                    understanding your opponent.
                  </p>
                  <p className="font-sans text-[16px] xl:w-[540px] w-[380px]">
                    While he comes from the world of professional boxing, John
                    takes a holistic approach to fitness, and is just as likely
                    to throw you into a yoga class as he is to throw you around
                    the boxing ring.
                  </p>

                  <a href="/" className="btn mt-20 w-[237px]">
                    SCHEDULE WORKOUT
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full xl:h-full h-[1035px]  bg-black xl:flex xl:justify-center xl:items-center">
              <div className="w-[1224px] h-[752px] text-white xl:grid xl:grid-cols-2 xl:gap-x-40">
                <div className="flex flex-col justify-center px-4 w-full">
                  <h2 className="md:text-3xl text-2xl font-extrabold">
                    INNA GEBROW
                  </h2>
                  <p className=" font-sans text-[16px] my-5 xl:w-[540px] w-[380px]">
                    Are you looking to improve your and joint strength? Then you
                    should get in touch within Inna for a consultation.
                  </p>
                  <p className="font-sans text-[16px] xl:w-[540px] w-[380px]">
                    A highly trained instructor for both yoga and pilates, Inna
                    can help you better understand your own body, and will help
                    guide you towards your goals in a way that works with your
                    body instead of against it.
                  </p>

                  <a href="/" className="btn mt-20 w-[237px]">
                    SCHEDULE WORKOUT
                  </a>
                </div>
                <div className="px-4">
                  <img
                    src={Inna}
                    alt=""
                    className="md:w-[382px] xl:h-[750px]  h-[579px] object-cover"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Ready />
    </>
  );
}

export default Personal;
