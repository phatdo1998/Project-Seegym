import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";

function DefaultLayout({ children, ...props }) {
  const { isMobile } = props;
  return (
    <div className="">
      <Navbar isMobile={isMobile} />
      <div className="">{children}</div>
      {/* <About /> */}
      {/* <Ready /> */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
