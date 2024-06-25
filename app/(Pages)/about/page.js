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
      <h1
        id="scroll-arkco"
        style="position: absolute; writing-mode: vertical-lr; font-size: 6vmax; color: #F7931E; transform: rotate(180deg); left: 5.5%; margin-top: 5%"
      >
        ARKCO
      </h1>
      <div id="about" class="flex-container" style="margin-top: 5%;">
        <div class="flex-item-left scrollFade" style="flex: 30%">
          <div id="about-header-desktop" style="position: relative;">
            <div style="transform: rotate(-90deg);">
              <h1 style="font-size: 5vmax">ABOUT US</h1>
              <h1 style="font-size: 1.5vmax; margin: -15px 0; text-transform: uppercase">
                procuring efficiency for <br />
                your construction needs
              </h1>
              <p style="font-size: .75vmax; width: 20vmax">
                Arkco, a distinguished entity within a conglomerate specializing
                in construction and project management, takes pride in its
                proficient team. Our adept professionals enable us to seamlessly
                deliver and design a diverse typology of projects, turning your
                envisioned ideas into reality with efficiency.
              </p>
            </div>
          </div>
          <div id="about-header-mobile">
            <h1 style="font-size: 6vmax">ABOUT US</h1>
            <h1 style="font-size: 2vmax; text-transform: uppercase">
              procuring efficiency for <br />
              your construction needs
            </h1>
            <div style=" margin: auto; width: 65%">
              <p style="font-size: 1.5vmax; ">
                Arkco, a distinguished entity within a conglomerate specializing
                in construction and project management, takes pride in its
                proficient team. Our adept professionals enable us to seamlessly
                deliver and design a diverse typology of projects, turning your
                envisioned ideas into reality with efficiency.
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex-item-right scrollFade flex-container"
          style="flex: 70%; padding-bottom: 10vh"
        >
          <div class="service-box" style="flex: 60%">
            <div class="service-card" id="servicecard1">
              <h1 style="position: absolute; left: 0; right: 0; margin: auto; z-index: 10; color: black">
                ARKCO
              </h1>
              <div class="imgBox">
                <img loading="lazy" src="img/about.png" alt="some image" />
              </div>
              <div class="details">
                <h2>
                  Who We Are
                  <br />
                </h2>
              </div>
              <div class="inside-content">
                <p>
                  ArkCo aims to elevate the construction project management
                  experience. Recognizing the notorious complexity and
                  occasional disjointed nature of the industry, ArkCo has
                  dedicated efforts to further develop and streamline the
                  process of delivering turn key commercial spaces swiftly. Our
                  commitment is reflected in the implementation of multiple
                  innovative systems and technologies, that advances and empower
                  us to collaborate seamlessly with you, facilitating the
                  creation of all your projects.
                </p>
              </div>
            </div>
          </div>

          <div class="container" style="flex: 40%">
            <div class="card-column column-0">
              <div
                onclick="window.location.href = '/allen'"
                style="cursor: pointer"
                class="card card-color-0"
              >
                <div class="border"></div>
                <img loading="lazy" src="img/allen_azarkian.png" alt="allen" />
                <h1>
                  <b>Allen Azarkian</b> <br /> CEO and Founder
                </h1>
              </div>
            </div>
            <div class="card-column column-1">
              <div class="card card-color-1">
                <div class="border"></div>
                <img
                  loading="lazy"
                  src="https://www.aapc.nyc/img/pierre.png"
                  alt="teammate"
                />
                <h1>
                  <b>Pierre Tairouz</b> <br /> Design Team Director
                </h1>
              </div>
              <div class="card card-color-1">
                <div class="border"></div>
                <img loading="lazy" src="img/maggie.png" alt="teammate" />
                <h1>
                  <b>Maggie Kay Croke</b> <br />
                  Junior Designer
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
