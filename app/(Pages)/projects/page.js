import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import SideScroll from "./components/side-scroll";
import Listing from "./components/listing";
import "../../../public/css/style.css";
import "../../../public/css/projects.css";

export const metadata = {
  title: "ARKCO | Projects",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div
        id="projects"
        className="flex-container"
        style={{ marginBottom: "10%" }}
      >
        <SideScroll />
        <Listing />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
