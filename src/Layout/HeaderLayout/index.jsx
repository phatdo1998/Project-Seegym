import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

function DefaultLayout({ children, ...props }) {
  const { isMobile } = props;
  return (
    <div className="">
      <Header isMobile={isMobile} />
      <div className="">{children}</div>
      {/* <About />
      <Ready /> */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
