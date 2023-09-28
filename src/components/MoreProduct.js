import { CCarousel, CImage } from "@coreui/react";
import { CCarouselCaption } from "@coreui/react";
import { CCarouselItem } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import moreImg1 from "../images/moreImg(1).jpeg";
import moreImg2 from "../images/moreImg(2).jpeg";
import moreImg3 from "../images/moreImg(3).jpeg";
function MoreProduct() {
  return (
    <div className="moreProduct">
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={moreImg1} alt="slide 1" />
          <CCarouselCaption className="d-none d-md-block">
            <button className="slideBtn">Shoes & Boots</button>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={moreImg2} alt="slide 2" />
          <CCarouselCaption className="d-none d-md-block">
            <button className="slideBtn">Jumpers & Cardigans</button>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={moreImg3} alt="slide 3" />
          <CCarouselCaption className="d-none d-md-block">
            <button className="slideBtn">All Menswear</button>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
}
export default MoreProduct;
