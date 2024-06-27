import Image from "next/image";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
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
        <div
          id="scroll-1"
          className="flex-item-left scrollFade"
          style={{ flex: "30%" }}
        >
          <h1
            id="scroll-arkco-1"
            style={{
              position: "fixed",
              writingMode: "vertical-lr",
              fontSize: "6vmax",
              color: "#F7931E",
              transform: "rotate(180deg)",
              left: "5%",
              top: "26%",
            }}
          >
            ARKCO
          </h1>
          <div
            id="project-header-desktop"
            style={{ position: "relative", marginTop: "65%" }}
          >
            <div style={{ transform: "rotate(-90deg)" }}>
              <h1 style={{ fontSize: "5vmax" }}>PROJECTS</h1>
              <h1
                style={{
                  fontSize: "1.5vmax",
                  margin: "-15px 0",
                  textTransform: "uppercase",
                }}
              >
                excellence <br /> in work
              </h1>
              <p style={{ fontSize: ".75vmax", width: "20vmax" }}>
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
          <div id="project-header-mobile" style={{ marginTop: "10vh" }}>
            <h1 style={{ fontSize: "6vmax" }}>PROJECTS</h1>
            <h1 style={{ fontSize: "2vmax", textTransform: "uppercase" }}>
              excellence <br /> in work
            </h1>
            <div style={{ margin: "auto", width: "65%" }}>
              <p style={{ fontSize: "1.5vmax" }}>
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
          <div className="container">
            <div className="card-column column-0">
              <div className="card card-color-0">
                <div className="border"></div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/gallery/boxinggym.png"
                />
                <h1>60 w 125 [Boxing Gym]</h1>
              </div>
              <div className="card card-color-2">
                <div className="border"></div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/21OldWestbury/3.jpg"
                />
                <h1>21 Old Westbury [Wedding hall]</h1>
              </div>
            </div>
            <div className="card-column column-1">
              <div className="card card-color-1">
                <div className="border"></div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/gallery/krico.png"
                />
                <h1>772 9th [Krico]</h1>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/712w125/3.JPG"
                />
                <h1>712 West 125th Street</h1>
              </div>
            </div>
            <div className="card-column column-2">
              <div className="card card-color-1">
                <div className="border"></div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/130CutterMill/1.png"
                />
                <h1>130 Cutter Mill [Temple]</h1>
              </div>
              <div className="card card-color-3">
                <div className="border"></div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/gotham/1.JPEG"
                />
                <h1>1356 Broadway [Gotham Hall]</h1>
              </div>
            </div>
          </div>
        </div>

        <div id="cover" className="cover"></div>

        <div id="open-content" className="open-content">
          <a href="#" id="close-content" className="close-content">
            <span className="x-1"></span>
            <span className="x-2"></span>
          </a>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            id="open-content-image"
            src=""
          />
          <div className="text-inside" id="open-content-text"></div>
        </div>
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
