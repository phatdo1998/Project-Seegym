import { Routes, Route, useLocation } from "react-router-dom";
import { publicRoutes } from "./Router/index";
import { DefaultLayout } from "./Layout";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="w-[100%] font-oswald overflow-hidden">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Layout = (route.layout = DefaultLayout);
          const Page = route.conponent;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout isMobile={isMobile}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
