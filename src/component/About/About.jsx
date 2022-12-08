import about from "./img/about.webp";
import about2 from "./img/about2.webp";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-[820px] md:h-[1500px] ">
      <div className=" flex items-center justify-center md:h-[752px] h-[410px] relative text-white">
        <img src={about} alt="" className="w-full h-full z-0 object-cover" />
        <div className="z-10 absolute top-10 w-[410px] md:w-[1224px] h-full px-4 md:pl-0 md:mt-36 ">
          <div className="">
            <h1 className="text-white font-extrabold md:text-5md text-[32px]  ">
              {" "}
              ABOUT BRONX
            </h1>
            <p className="w-[400px] md:w-[505px] mt-10 font-sans md:mt-20">
              We’re not here to carry you to fitness, we’re here to motivate you
              to carry yourself to your goals.{" "}
            </p>
            <p className="w-[400px] md:w-[505px] mt-7 font-sans">
              If you’re not sure what your goals are, or don’t know where to
              start on your fitness journey, come in and speak to one of our
              qualified trainers who can help you develop a plan.
            </p>
            <div className="mt-10 md:mt-32 pb-5">
              <Link to="/schedule" className="btn ">
                SCHEDULE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:h-[752px] h-[410px]  relative text-white">
        <img src={about2} alt="" className="w-full h-full z-0 object-cover" />
        <div className=" z-10 absolute top-10 w-[410px] md:w-[1224px] h-full px-4 md:pl-0 md:mt-36 md:ml-[1620px] ">
          <div className="">
            <h1 className="text-white font-extrabold md:text-5md text-[32px] ">
              {" "}
              CLASSES
            </h1>
            <p className="w-[388px] md:w-[505px] mt-10 font-sans  ">
              We host dozens of classes every day, from deadlifting and HIIT to
              yoga and pilates. We also have different classes for varying
              levels of ability.
            </p>
            <p className="w-[388px] md:w-[505px] mt-7 font-sans ">
              Check out our individual class pages to see what’s on when, and
              stop on by for a chat if you want to see how we do things.
            </p>
          </div>
          <div className="mt-10 md:mt-32 pb-5">
            <Link to="classes" className="btn ">
              CLASSES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
