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
      {" "}
      <div id="projects" class="flex-container" style="margin-bottom: 10%;">
        <div id="scroll-1" class="flex-item-left scrollFade" style="flex: 30%">
          <h1
            id="scroll-arkco-1"
            style="position: fixed; writing-mode: vertical-lr; font-size: 6vmax; color: #F7931E; transform: rotate(180deg); left: 5%; top:26%"
          >
            ARKCO
          </h1>
          <div
            id="project-header-desktop"
            style="position: relative; margin-top: 65%"
          >
            <div style="transform: rotate(-90deg);">
              <h1 style="font-size: 5vmax">PROJECTS</h1>
              <h1 style="font-size: 1.5vmax; margin: -15px 0; text-transform: uppercase">
                excellence <br /> in work
              </h1>
              <p style="font-size: .75vmax; width: 20vmax">
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
          <div id="project-header-mobile" style="margin-top: 10vh">
            <h1 style="font-size: 6vmax">PROJECTS</h1>
            <h1 style="font-size: 2vmax; text-transform: uppercase">
              excellence <br /> in work
            </h1>
            <div style=" margin: auto; width: 65%">
              <p style="font-size: 1.5vmax; ">
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
        </div>
        <div class="flex-item-right scrollFade" style="flex: 70%">
          <div class="container">
            <div class="card-column column-0">
              <div class="card card-color-0">
                <div class="border"></div>
                <img src="img/gallery/boxinggym.png" />
                <h1>60 w 125 [Boxing Gym]</h1>
              </div>
              <div class="card card-color-2">
                <div class="border"></div>
                <img src="img/21OldWestbury/3.jpg" />
                <h1>21 Old Westbury [Wedding hall]</h1>
              </div>
            </div>
            <div class="card-column column-1">
              <div class="card card-color-1">
                <div class="border"></div>
                <img src="img/gallery/krico.png" />
                <h1>772 9th [Krico]</h1>
              </div>
              <div class="card card-color-3">
                <div class="border"></div>
                <img src="img/712w125/3.JPG" />
                <h1>712 West 125th Street</h1>
              </div>
            </div>
            <div class="card-column column-2">
              <div class="card card-color-1">
                <div class="border"></div>
                <img src="img/130CutterMill/1.png" />
                <h1>130 Cutter Mill [Temple]</h1>
              </div>
              <div class="card card-color-3">
                <div class="border"></div>
                <img src="img/gotham/1.JPEG" />
                <h1>1356 Broadway [Gotham Hall]</h1>
              </div>
            </div>
          </div>
        </div>

        <div id="cover" class="cover"></div>

        <div id="open-content" class="open-content">
          <a href="#" id="close-content" class="close-content">
            <span class="x-1"></span>
            <span class="x-2"></span>
          </a>
          <img id="open-content-image" src="" />
          <div class="text-inside" id="open-content-text"></div>
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

export default Projects;
