import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import SideScroll from "./components/side-scroll";
import ServiceBook from "./components/service-book";
import "../../../public/css/style.css";
import "../../../public/css/books.css";
import "../../../public/css/colorFan.css";
import "../../../public/css/contact.css";
import "../../../public/css/card-home.css";
import "../../../public/css/about.css";

export const metadata = {
  title: "ARKCO | Services",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Services = () => {
  return (
    <div>
      <Navbar />
      <div
        id="services"
        className="flex-container"
        style={{ marginTop: "10%", marginBottom: "10%" }}
      >
        <SideScroll />
        <ServiceBook />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
