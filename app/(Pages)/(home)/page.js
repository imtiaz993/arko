import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import SideScroll from "./components/side-scroll";
import Topper from "./components/topper";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "../../../public/css/style.css";
import "../../../public/css/books.css";
import "../../../public/css/colorFan.css";
import "../../../public/css/contact.css";
import "../../../public/css/card-home.css";
import "../../../public/css/about.css";

export const metadata = {
  title: "ARKCO | Home",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Topper />
      <div id="side-scroll" style={{ position: "relative" }}>
        <SideScroll />
        <About />
        <Services />
        <Projects />
        <Contact />
        <h1 className="about-outline-text AOT-ark">ARK</h1>
        <h1 className="about-outline-text AOT-co">CO</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
