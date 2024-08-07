"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div id="about" className="flex-container">
      <div className="flex-item-left scrollFade" style={{ flex: "30%" }}>
        <div id="about-header-desktop" style={{ position: "relative" }}>
          <div style={{ transform: "rotate(-90deg)" }}>
            <h1 style={{ fontSize: "5vmax" }}>ABOUT US</h1>
            <h1
              style={{
                fontSize: "1.5vmax",
                margin: "-15px 0",
                textTransform: "uppercase",
              }}
            >
              procuring efficiency for <br />
              your construction needs
            </h1>
            <p style={{ fontSize: ".75vmax", width: "20vmax" }}>
              Arkco, a distinguished entity within a conglomerate specializing
              in construction and project management, takes pride in its
              proficient team. Our adept professionals enable us to seamlessly
              deliver and design a diverse typology of projects, turning your
              envisioned ideas into reality with efficiency.
            </p>
          </div>
        </div>
        <div id="about-header-mobile">
          <h1 style={{ fontSize: "6vmax" }}>ABOUT US</h1>
          <h1 style={{ fontSize: "2vmax", textTransform: "uppercase" }}>
            procuring efficiency for <br />
            your construction needs
          </h1>
          <div style={{ margin: "auto", width: "65%" }}>
            <p style={{ fontSize: "1.5vmax" }}>
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
        className="flex-item-right scrollFade flex-container"
        style={{ flex: "70%", paddingBottom: "10vh" }}
      >
        <div className="service-box" style={{ flex: "60%" }}>
          <div className="service-card" id="servicecard1">
            <h1
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                margin: "auto",
                zIndex: "10",
                color: "black",
              }}
            >
              ARKCO
            </h1>
            <div className="imgBox">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="/img/about.png"
                alt="some image"
              />
            </div>
            <div className="details">
              <h2>
                Who We Are
                <br />
              </h2>
            </div>
            <div className="inside-content">
              <p>
                ArkCo aims to elevate the construction project management
                experience. Recognizing the notorious complexity and occasional
                disjointed nature of the industry, ArkCo has dedicated efforts
                to further develop and streamline the process of delivering turn
                key commercial spaces swiftly. Our commitment is reflected in
                the implementation of multiple innovative systems and
                technologies, that advances and empower us to collaborate
                seamlessly with you, facilitating the creation of all your
                projects.
              </p>
            </div>
          </div>
        </div>

        <div className="container" style={{ flex: "40%" }}>
          <div className="card-column column-0">
            <div
              onClick={() => {
                router.push("/allen");
              }}
              style={{ cursor: "pointer" }}
              className="card aboutCard  card-color-0"
            >
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="/img/allen_azarkian.png"
                alt="allen"
              />
              <h1>
                <b>Allen Azarkian</b> <br /> CEO and Founder
              </h1>
            </div>
          </div>
          <div className="card-column column-1">
            <div className="card aboutCard  card-color-1">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="https://www.aapc.nyc/img/pierre.png"
                alt="teammate"
              />
              <h1>
                <b>Pierre Tairouz</b> <br /> Design Team Director
              </h1>
            </div>
            <div className="card aboutCard  card-color-1">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="/img/maggie.png"
                alt="teammate"
              />
              <h1>
                <b>Maggie Kay Croke</b> <br />
                Junior Designer
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
