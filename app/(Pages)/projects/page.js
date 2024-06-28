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
      {/* <script>
gsap.to(".first", {
  duration: 1.5,
  delay: 0.5,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".second", {
  duration: 1.5,
  delay: 0.6,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".third", {
  duration: 1.5,
  delay: 0.7,
  top: "-100%",
  ease: "expo.inOut",
});

</script> */}
    </div>
  );
};

export default Projects;
