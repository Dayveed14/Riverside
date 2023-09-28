import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Banner from "./Banner";
import ProductSection1 from "./ProductSection1";
import ProductSection2 from "./ProductSection2";
import ProductSection3 from "./ProductSection3";
import ProductSection4 from "./ProductSection4";
import MoreProduct from "./MoreProduct";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Replacement from "./Replacement";
import UseScroll from "./UseScroll";

function Home() {
  const isScrolled = UseScroll();

  return (
    <div className="home-container" id="section1">
      {isScrolled ? (
        <Replacement />
      ) : (
        <div className="smooth-scroll-container">
          <TopBar />
          <Navigation />
        </div>
      )}
      <Banner />
      <ProductSection1 />
      <ProductSection2 />
      <ProductSection3 />
      <ProductSection4 />
      <MoreProduct />
      <ContactSection />
      <Footer />

      {isScrolled ? <Replacement /> : null}
    </div>
  );
}
export default Home;
