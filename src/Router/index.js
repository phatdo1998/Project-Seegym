import HomePage from "../component/Pages/Home/HomePage";
import Classes from "../component/Pages/Classes/index";
import Personal from "../component/Pages/Personal";
import Prices from "../component/Pages/Prices/index";
import Schedule from "../component/Pages/Schedule";
import SignUp from "../component/Pages/SignUp";
import Cardio from "../component/Pages/Cardio";
import Yoga from "../component/Pages/Yoga";
import Lifting from "../component/Pages/Lifting";
import Press from "../component/Pages/Press";

export const publicRoutes = [
  { path: "/", conponent: HomePage },
  { path: "/classes", conponent: Classes },
  { path: "/personal", conponent: Personal },
  { path: "/prices", conponent: Prices },
  { path: "/schedule", conponent: Schedule },
  { path: "/signup", conponent: SignUp },
  { path: "/cardio", conponent: Cardio },
  { path: "/yoga", conponent: Yoga },
  { path: "/lifting", conponent: Lifting },
  { path: "/press", conponent: Press },
];
