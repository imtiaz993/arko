import Navbar from "app/components/navbar";
import SideScroll from "./components/side-scroll";
import AboutAllen from "./components/about-allen";
import AssociatedBussiness from "./components/associated-bussiness";
import "../../../public/css/style.css";
import "../../../public/css/projects.css";
import "../../../public/css/allen.css";

export const metadata = {
  title: "ARKCO | Allen",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Allen = () => {
  return (
    <div>
      <Navbar />
      <div id="projects" className="flex-container">
        <SideScroll />
        <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
          <AboutAllen />
          <AssociatedBussiness />
        </div>
      </div>
      
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

export default Allen;
