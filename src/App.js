import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Router/index";
import { DefaultLayout } from "./Layout";
import { useEffect, useState } from "react";
import HeaderLayout from "./Layout/HeaderLayout";

function App() {
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
    <Router>
      <div className="w-[100%] font-oswald overflow-hidden">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null ? DefaultLayout : HeaderLayout;
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
    </Router>
  );
}

export default App;
