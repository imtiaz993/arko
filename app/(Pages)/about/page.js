import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import SideScroll from "./components/side-scroll";
import WhoWeAre from "./components/who-we-are";
import Team from "./components/team";
import "../../../public/css/style.css";
import "../../../public/css/books.css";
import "../../../public/css/colorFan.css";
import "../../../public/css/contact.css";
import "../../../public/./css/card-home.css";
import "../../../public/./css/about.css";

export const metadata = {
  title: "ARKCO | About Us",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const About = () => {
  return (
    <div>
      <Navbar />
      <div id="about" className="flex-container" style={{ marginTop: "5%" }}>
        <SideScroll />
        <div
          className="flex-item-right scrollFade flex-container"
          style={{ flex: "70%", paddingBottom: "10vh" }}
        >
          <WhoWeAre />
          <Team />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
