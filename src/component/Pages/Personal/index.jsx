import Matthew from "./img/MATTHEW HERON.avif";
import John from "./img/JOHN HEERON.avif";
import Inna from "./img/INNA GEBROW.avif";
import Ready from "../../Ready/Ready";

function Personal() {
  return (
    <>
      <div className=" bg-black ">
        <div className="flex items-center justify-center">
          <div className="w-[1224px] h-[240px] text-white flex items-center">
            <h1 className="text-[56px] font-extrabold ">PERSONAL TRAINERS</h1>
          </div>
        </div>
        <div className="w-full h-full bg-black flex justify-center items-center">
          <div className="w-[1224px] h-[752px] text-white grid grid-cols-2 gap-x-40">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold">MATTHEW HERON</h2>
              <p className=" font-sans text-[16px] my-5 w-[540px]">
                MATTHEW HERON Mathew is the expert to talk to if your fitness
                goal is to lose weight or tone up. Working clients through
                high-intensity workouts and tailored fitness plans, Mat doesn’t
                take no for an answer when it comes to your goals.
              </p>
              <p className="font-sans text-[16px] ">
                With a background in sports psychology and physical therapy,
                Matt understands how the mind and body need to work together for
                you to achieve success.
              </p>

              <a href="/" className="btn mt-20 w-[237px]">
                SCHEDULE WORKOUT
              </a>
            </div>
            <div className="">
              <img
                src={Matthew}
                alt=""
                className="w-[503px] h-[750px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-black flex justify-center items-center">
          <div className="w-[1224px] h-[752px] text-white grid grid-cols-2 gap-x-40">
            <div className="">
              <img
                src={John}
                alt=""
                className="w-[503px] h-[750px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center flex-r">
              <h2 className="text-3xl font-extrabold">JOHN HEERON</h2>
              <p className=" font-sans text-[16px] my-5 w-[490px]">
                Whether you’re new to boxing or a seasoned fighter, John can
                teach you a thing or two about keeping fit for the ring and
                understanding your opponent.
              </p>
              <p className="font-sans text-[16px] w-[490px]">
                While he comes from the world of professional boxing, John takes
                a holistic approach to fitness, and is just as likely to throw
                you into a yoga class as he is to throw you around the boxing
                ring.
              </p>

              <a href="/" className="btn mt-20 w-[237px]">
                SCHEDULE WORKOUT
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-full bg-black flex justify-center items-center">
          <div className="w-[1224px] h-[752px] text-white grid grid-cols-2 gap-x-40">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold">INNA GEBROW</h2>
              <p className=" font-sans text-[16px] my-5 w-[540px]">
                Are you looking to improve your and joint strength? Then you
                should get in touch within Inna for a consultation.
              </p>
              <p className="font-sans text-[16px] w-[490px] ">
                A highly trained instructor for both yoga and pilates, Inna can
                help you better understand your own body, and will help guide
                you towards your goals in a way that works with your body
                instead of against it.
              </p>

              <a href="/" className="btn mt-20 w-[237px]">
                SCHEDULE WORKOUT
              </a>
            </div>
            <div className="">
              <img
                src={Inna}
                alt=""
                className="w-[503px] h-[750px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Ready />
    </>
  );
}

export default Personal;