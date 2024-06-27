"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
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
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div
        id="home"
        className="top-containers scrollFade"
        style={{ overflowX: "hidden" }}
      >
        <div>
          <div id="fix">
            <div className="topper-logo">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="/img/Circle_Logo.png"
                id="top-circle"
                alt="circle"
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="/img/ARK_Logo.png"
                id="top-ark"
                alt="ark"
              />
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="/img/CO_Logo.png"
                id="top-co"
                alt="co"
              />
            </div>
          </div>

          <div className="top-pic">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="top-pic-image"
              src="/img/hero_image.jpeg"
              alt="crane"
            />
          </div>
          <h2 className="topper-slogan">
            We strategically integrate our expertise in construction and project
            management to offer seamless solutions.
          </h2>
        </div>
      </div>

      <div id="side-scroll" style={{ position: "relative" }}>
        <h1
          id="scroll-arkco"
          style={{
            position: "absolute",
            writingMode: "vertical-lr",
            fontSize: "6vmax",
            color: "#F7931E",
            transform: "rotate(180deg)",
            left: "5.5%",
            marginTop: "5%",
          }}
        >
          ARKCO
        </h1>
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
                  Arkco, a distinguished entity within a conglomerate
                  specializing in construction and project management, takes
                  pride in its proficient team. Our adept professionals enable
                  us to seamlessly deliver and design a diverse typology of
                  projects, turning your envisioned ideas into reality with
                  efficiency.
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
                  Arkco, a distinguished entity within a conglomerate
                  specializing in construction and project management, takes
                  pride in its proficient team. Our adept professionals enable
                  us to seamlessly deliver and design a diverse typology of
                  projects, turning your envisioned ideas into reality with
                  efficiency.
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
                    experience. Recognizing the notorious complexity and
                    occasional disjointed nature of the industry, ArkCo has
                    dedicated efforts to further develop and streamline the
                    process of delivering turn key commercial spaces swiftly.
                    Our commitment is reflected in the implementation of
                    multiple innovative systems and technologies, that advances
                    and empower us to collaborate seamlessly with you,
                    facilitating the creation of all your projects.
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
                  className="card card-color-0"
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
                <div className="card card-color-1">
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
                <div className="card card-color-1">
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

        <div id="services" className="flex-container">
          <div
            id="scroll-1"
            className="flex-item-left scrollFade"
            style={{ flex: "30%" }}
          >
            <div id="services-header-desktop" style={{ position: "relative" }}>
              <div style={{ transform: "rotate(-90deg)" }}>
                <h1 style={{ fontSize: "5vmax" }}>SERVICES</h1>
                <h1
                  style={{
                    fontSize: "1.5vmax",
                    margin: "-15px 0",
                    textTransform: "uppercase",
                  }}
                >
                  Forging connections by building bridges across every industry
                  gap
                </h1>
                <p style={{ fontSize: ".75vmax", width: "25vmax" }}>
                  In construction, we employ advanced methodologies to ensure
                  structural integrity, safety, and aesthetic appeal. Our
                  demolition services are carried out with precision, minimizing
                  disruptions and environmental impact. The project management
                  aspect involves a meticulous coordination of resources,
                  timelines, and stakeholders to facilitate a smooth workflow.
                  By amalgamating these core services, Arkco not only constructs
                  physical structures but also bridges that span the diverse
                  challenges within the industry. This integrated approach
                  allows us to navigate complexities, enhance communication, and
                  deliver projects with a holistic understanding of the entire
                  lifecycle—from concept to completion.
                </p>
              </div>
            </div>
            <div id="services-header-mobile">
              <h1 style={{ fontSize: "6vmax" }}>SERVICES</h1>
              <h1 style={{ fontSize: "2vmax", textTransform: "uppercase" }}>
                Forging connections by building bridges across every industry
                gap
              </h1>
              <div style={{ margin: "auto", width: "65%" }}>
                <p style={{ fontSize: "1.5vmax" }}>
                  In construction, we employ advanced methodologies to ensure
                  structural integrity, safety, and aesthetic appeal. Our
                  demolition services are carried out with precision, minimizing
                  disruptions and environmental impact. The project management
                  aspect involves a meticulous coordination of resources,
                  timelines, and stakeholders to facilitate a smooth workflow.
                  By amalgamating these core services, Arkco not only constructs
                  physical structures but also bridges that span the diverse
                  challenges within the industry. This integrated approach
                  allows us to navigate complexities, enhance communication, and
                  deliver projects with a holistic understanding of the entire
                  lifecycle—from concept to completion.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
            <div className="main">
              <ul id="bk-list" className="bk-list clearfix">
                <li id="book-6">
                  <div className="bk-book book-1 bk-bookdefault">
                    <div className="bk-front bk-bookview">
                      <div
                        className="book-cover"
                        style={{ borderRadius: "0 20px 20px 0" }}
                      >
                        <div className="book-spine-front"></div>
                        <div className="band"></div>
                        <h1
                          className="book-title"
                          style={{ color: "transparent", userSelect: "none" }}
                          draggable="false"
                        >
                          Our Services
                        </h1>
                        <div className="cardboard-front"></div>
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          loading="lazy"
                          src="/img/logobook.png"
                          className="book-cover-picture"
                          alt="cover"
                        />
                      </div>
                      <div
                        className="bk-cover-back"
                        style={{ borderRadius: "20px 0 0 20px" }}
                      >
                        <div
                          className="cover-back-cardboard"
                          style={{ borderRadius: "20px 0 0 20px" }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="bk-page bk-bookview"
                      style={{ borderRadius: "0 20px 20px 0" }}
                    >
                      <div className="bk-content bk-content-current">
                        <h3 style={{ color: "black" }}>Design Proposals</h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Crafting comprehensive proposals outlining conceptual
                          design ideas for client review and consideration.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>Schematic Design</h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Developing preliminary sketches and plans to
                          illustrate the overall design concept and spatial
                          arrangement.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>
                          As-Built Condition Reviews
                        </h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Assessing and documenting the current state of a
                          structure or space to inform design modifications or
                          renovations.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>Interior Design</h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Creating aesthetically pleasing and functional
                          interior spaces through thoughtful selection of
                          colors, materials, and furnishings.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>
                          Floor Plan and Design Documents
                        </h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Producing detailed floor plans and design
                          documentation that serve as a blueprint for
                          construction and project execution.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>3D Visualization</h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          {" "}
                          Utilizing advanced technologies to create immersive
                          three-dimensional visual representations of design
                          concepts for better client understanding.
                        </p>
                      </div>
                      <div className="bk-content" style={{ display: "none" }}>
                        <h3 style={{ color: "black" }}>
                          General Construction | Demolition
                        </h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Executing construction and demolition activities with
                          precision and adherence to safety standards.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>
                          Construction Management and Administration
                        </h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Overseeing the entire construction process, from
                          planning and coordination to execution and completion,
                          ensuring seamless project delivery.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>Project Planning</h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Developing comprehensive plans outlining project
                          scope, timelines, and resource requirements to guide
                          successful project execution.
                        </p>
                      </div>
                      <div className="bk-content">
                        <h3 style={{ color: "black" }}>
                          Procurement and Delivery
                        </h3>
                        <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                          Managing the sourcing and delivery of materials,
                          equipment, and services essential for project
                          implementation.
                        </p>
                      </div>
                      <div className="ribbon"></div>
                    </div>
                    <div
                      className="bk-back bk-bookback"
                      style={{ borderRadius: "20px 0 0 20px" }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "10%",
                          position: "absolute",
                          background: "#222222",
                          right: "0",
                        }}
                      ></div>
                      <div className="back-cardboard"></div>
                      <p className="back-text">
                        FORGING CONNECTIONS BY BUILDING BRIDGES ACROSS EVERY
                        INDUSTRY GAP
                      </p>
                    </div>
                    <div className="bk-right"></div>
                    <div className="bk-left">
                      <h2>
                        <span style={{ fontWeight: "bold", color: "#000" }}>
                          Our Services
                        </span>
                        <span>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01
                        </span>
                      </h2>
                      <div className="spine-cardboard"></div>
                      <button className="bk-bookback arrow">➦</button>
                    </div>
                    <div className="bk-top"></div>
                    <div className="bk-bottom"></div>
                  </div>
                  <div className="bk-info"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="projects" className="flex-container">
          <div
            id="scroll-2"
            className="flex-item-left scrollFade"
            style={{ flex: "30%", position: "relative" }}
          >
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
                  Excellence in work is a cornerstone of our commitment at
                  Arkco. We strive to consistently deliver outstanding results,
                  combining expertise, innovation, and dedication in every
                  project we undertake.
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
                  Excellence in work is a cornerstone of our commitment at
                  Arkco. We strive to consistently deliver outstanding results,
                  combining expertise, innovation, and dedication in every
                  project we undertake.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex-item-right scrollFade"
            style={{ flex: "70%", paddingTop: "10%" }}
          >
            <div className="project-wrapper">
              <div className="project-around">
                <div id="project1">
                  <h1>712 West 125th Street</h1>
                  <h3>
                    The primary objective for 712 W 125th was to craft a vibrant
                    environment for this Harlem Jewel. Ensuring appeal to local
                    careerists was a crucial aspect in the meticulous design of
                    this space.
                  </h3>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                    id="mainPhoto1"
                    src="/img/712w125/1.JPG"
                    alt="project"
                  />
                </div>
              </div>
              <div className="project-around">
                <div id="project2">
                  <h1>130 Cutter Mill</h1>
                  <h3>
                    130 Cuttermill stands as a sanctuary of worship, where our
                    dedicated team thoughtfully prioritized the user experience
                    and needs. Our commitment is to ensure the seamless
                    operation of this space, harmoniously embodying the beauty
                    of beliefs in every corner.
                  </h3>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                    id="#mainPhoto2"
                    src="/img/130CutterMill/1.png"
                    alt="project"
                  />
                </div>
              </div>
              <div className="project-around">
                <div id="project3">
                  <h1>21 Old Westbury [Wedding hall]</h1>
                  <h3>
                    21 Old Westbury underwent a carefully curated
                    transformation, meticulously tailored to a demanding
                    schedule. Our objective was to elevate the already majestic
                    spaces, infusing them with a golden touch that could
                    effortlessly cater to the visions of brides and various
                    events.
                  </h3>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                    id="#mainPhoto3"
                    src="/img/21OldWestbury/1.jpg"
                    alt="project"
                  />
                </div>
              </div>
              <div className="project-around">
                <div id="project4">
                  <h1>1356 Broadway [Gotham Hall] </h1>
                  <h3>
                    1356 Broadway stands as a building unlike any other, steeped
                    in multiple layers of history. As a protected landmark. We
                    carefully restored spaces not only narrate a tale but also
                    invite guests to experience each room in a distinct manner,
                    transporting them to a space that is truly like no other.
                  </h3>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    loading="lazy"
                    id="#mainPhoto4"
                    src="/img/gotham/1.JPEG"
                    alt="project"
                  />
                </div>
              </div>
            </div>
            <Link href="/projects" className="button project-button">
              PROJECT GALLERY
            </Link>
          </div>
        </div>
        <div id="contact" className="flex-container" style={{ flex: "30%" }}>
          <div
            id="scroll-3"
            className="flex-item-left scrollFade"
            style={{ flex: "30%" }}
          >
            <div id="contact-header-desktop" style={{ position: "relative" }}>
              <div style={{ transform: "rotate(-90deg)" }}>
                <h1 style={{ fontSize: "5vmax" }}>CONTACT</h1>
                <h1
                  style={{
                    fontSize: "1.5vmax",
                    margin: "-15px 0",
                    cursor: "pointer",
                  }}
                >
                  <b
                    onClick={() => {
                      window.location.href = "tel:212-547-9000";
                    }}
                  >
                    CALL US
                  </b>{" "}
                  <br />{" "}
                  <b
                    onClick={() => {
                      window.location.href = "mailto:admin@arkco.nyc";
                    }}
                  >
                    EMAIL US
                  </b>
                </h1>
                <p style={{ fontSize: ".75vmax", width: "20vmax" }}>
                  We invite you to learn more about us and discover the vast
                  ways that we can assist you. We look forward to the
                  opportunity to discuss potential collaborations and build
                  mutually beneficial partnerships.
                </p>
              </div>
            </div>
            <div id="contact-header-mobile" style={{ marginTop: "15vh" }}>
              <h1 style={{ fontSize: "6vmax" }}>CONTACT</h1>
              <h1 style={{ fontSize: "2vmax" }}>
                CALL US <br /> EMAIL US
              </h1>
              <div style={{ margin: "auto", width: "65%" }}>
                <p style={{ fontSize: "1.5vmax" }}>
                  We invite you to learn more about us and discover the vast
                  ways that we can assist you. We look forward to the
                  opportunity to discuss potential collaborations and build
                  mutually beneficial partnerships.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
            <div>
              <form
                className="form contact"
                id="form1"
                action="https://formsubmit.co/admin@arkco.nyc"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.arkco.nyc"
                />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  src="/img/pencil.png"
                  style={{
                    width: "auto",
                    position: "absolute",
                    left: "-125px",
                    height: "100%",
                    rotate: "2deg",
                    WebkitFilter: "drop-shadow(5px 5px 5px #222)",
                    filter: "drop-shadow(5px 5px 5px #222)",
                  }}
                  draggable="false"
                  alt="project"
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  className="clipboard"
                  src="/img/clipboard.png"
                  draggable="false"
                  style={{
                    position: "absolute",
                    width: "40%",
                    height: "auto",
                    top: "-15%",
                    left: "0",
                    right: "0",
                    margin: "auto",
                  }}
                  alt="project"
                />
                <div
                  className="contact-top"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: "90",
                  }}
                >
                  <h2>CONTACT US</h2>
                  <h2
                    id="joinform"
                    style={{
                      border: "none",
                      textAlign: "right",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    JOIN US
                  </h2>
                </div>
                <p type="NAME:">
                  <input placeholder="Write your name here..." required />
                </p>
                <p type="SUBJECT:">
                  <input
                    placeholder="What is your message regarding..."
                    required
                  />
                </p>
                <p type="EMAIL:">
                  <input
                    placeholder="Let us know how to contact you back..."
                    required
                  />
                </p>
                <p type="MESSAGE:">
                  <input
                    placeholder="What would you like to tell us..."
                    required
                  />
                </p>
                <br />
                <button
                  type="submit"
                  className="button"
                  style={{
                    position: "absolute",
                    right: "10%",
                    transform: "scale(.8)",
                  }}
                >
                  Send Message
                </button>

                <div className="ribbon-contact">
                  <span
                    className="fa fa-location-arrow"
                    onClick={() => {
                      window.open(
                        "https://maps.app.goo.gl/3S2kgXWk48vREADu9",
                        "_blank"
                      );
                    }}
                  ></span>
                  <span
                    className="fa fa-phone"
                    onClick={() => {
                      window.location.href = "tel:212-547-9000";
                    }}
                  ></span>
                  <span
                    className="fa fa-envelope"
                    onClick={() => {
                      window.location.href = "mailto:admin@arkco.nyc";
                    }}
                  ></span>
                </div>
              </form>
              <form
                className="form contact"
                id="form2"
                action="https://formsubmit.co/talent@aapc.nyc"
                method="POST"
                enctype="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.aapc.nyc"
                />
                <input type="hidden" name="_captcha" value="true" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input
                  type="hidden"
                  name="_subject"
                  value="ArkCo - Job Application Submission"
                />

                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  src="/img/pencil.png"
                  style={{
                    width: "auto",
                    height: "auto",
                    position: "absolute",
                    left: "-125px",
                    height: "100%",
                    rotate: "2deg",
                    WebkitFilter: "drop-shadow(5px 5px 5px #222)",
                    filter: "drop-shadow(5px 5px 5px #222)",
                  }}
                  draggable="false"
                  alt="project"
                />
               <Image
                width={0}
                height={0}
                sizes="100vw"
                  loading="lazy"
                  className="clipboard"
                  src="/img/clipboard.png"
                  draggable="false"
                  style={{
                    position: "absolute",
                    width: "40%",
                    height: "auto",
                    top: "-15%",
                    left: "0",
                    right: "0",
                    margin: "auto",
                  }}
                  alt="project"
                />
                <div
                  className="contact-top"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: "90",
                  }}
                >
                  <h2
                    id="contactform"
                    style={{
                      border: "none",
                      textAlign: "left",
                      color: "black",
                      cursor: "pointer",
                    }}
                  >
                    CONTACT US
                  </h2>
                  <h2 style={{ textAlign: "right" }}>JOIN US</h2>
                </div>
                <p type="NAME:">
                  <input placeholder="Write your name here..." required />
                </p>
                <p type="SUBJECT:">
                  <input
                    placeholder="What position is your application regarding..."
                    required
                  />
                </p>
                <p type="RESUME/FILES:">
                  <input
                    type="file"
                    id="file"
                    multiple="multiple"
                    accept="application/vnd.ms-word.document.macroEnabled.12, application/pdf, image/png, image/jpeg"
                    required
                  />
                </p>
                <p type="MESSAGE:">
                  <input placeholder="What else would you like to tell us..." />
                </p>
                <br />
                <button
                  type="submit"
                  className="button"
                  style={{
                    position: "absolute",
                    right: "10%",
                    transform: "scale(.8)",
                  }}
                >
                  Apply
                </button>

                <div className="ribbon-contact">
                  <span
                    className="fa fa-location-arrow"
                    onClick="window.open('https://maps.app.goo.gl/3S2kgXWk48vREADu9', '_blank')"
                  ></span>
                  <span
                    className="fa fa-phone"
                    onClick="window.location.href = 'tel:212-547-9000'"
                  ></span>
                  <span
                    className="fa fa-envelope"
                    onClick="window.location.href = 'mailto:admin@arkco.nyc';"
                  ></span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <h1 className="about-outline-text AOT-ark">ARK</h1>
        <h1 className="about-outline-text AOT-co">CO</h1>
      </div>
      <Footer />

      {/* <script type="text/javascript">
  var image = document.getElementById("mainPhoto1");
  var currentPos = 0;
  var images = ["img/712w125/1.JPG", "img/712w125/2.JPG", "img/712w125/3.JPG", "img/712w125/4.JPG"]

  function volgendefoto() {
      if (++currentPos >= images.length)
          currentPos = 0;

      image.style.opacity = 0;
      setTimeout(function () {
          image.src = images[currentPos];

          setTimeout(function () {
              image.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto, 5000);
</script>
<script type="text/javascript">
  var image2 = document.getElementById("#mainPhoto2");
  var currentPos2 = 0;
  var images2 = ["img/130CutterMill/1.png", "img/130CutterMill/2.png", "img/130CutterMill/3.png", "img/130CutterMill/4.png", "img/130CutterMill/5.png", "img/130CutterMill/6.png", "img/130CutterMill/7.png", "img/130CutterMill/8.png", "img/130CutterMill/9.png"]

  function volgendefoto2() {
      if (++currentPos2 >= images2.length)
          currentPos2 = 0;

      image2.style.opacity = 0;
      setTimeout(function () {
          image2.src = images2[currentPos2];

          setTimeout(function () {
              image2.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto2, 5000);
</script>
<script type="text/javascript">
  var image3 = document.getElementById("#mainPhoto3");
  var currentPos3 = 0;
  var images3 = ["img/21OldWestbury/1.jpg", "img/21OldWestbury/2.jpg", "img/21OldWestbury/3.jpg", "img/21OldWestbury/4.jpg", "img/21OldWestbury/5.jpeg", "img/21OldWestbury/6.jpg", "img/21OldWestbury/7.jpeg", "img/21OldWestbury/8.jpeg", "img/21OldWestbury/9.jpg"]

  function volgendefoto3() {
      if (++currentPos3 >= images3.length)
          currentPos3 = 0;

      image3.style.opacity = 0;
      setTimeout(function () {
          image3.src = images3[currentPos3];

          setTimeout(function () {
              image3.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto3, 5000);
</script>
<script type="text/javascript">
  var image4 = document.getElementById("#mainPhoto4");
  var currentPos4 = 0;
  var images4 = ["img/gotham/1.JPEG", "img/gotham/2.JPEG", "img/gotham/3.JPEG", "img/gotham/4.JPEG", "img/gotham/5.JPEG", "img/gotham/6.JPEG", "img/gotham/7.JPEG", "img/gotham/8.JPEG", "img/gotham/9.JPEG"]

  function volgendefoto4() {
      if (++currentPos4 >= images4.length)
          currentPos4 = 0;

      image4.style.opacity = 0;
      setTimeout(function () {
          image4.src = images4[currentPos4];

          setTimeout(function () {
              image4.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto4, 5000);
</script>
<script>

  // Get all buttons with className="btn" inside the container
  var btns = document.getElementsByClassName("item");
  console.log(btns);

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");

          // If there's no active class
          if (current.length > 0) {
              current[0].className = current[0].className.replace(" active", "");
          }

          // Add the active class to the current/clicked button
          this.className += " active";
      });
  }
</script>

<script>
  $(function () {

      Books.init();

  });
</script>

<script>
  $(document).scroll(function () {
      var wrapper = $('#side-scroll');
      var box = $('#scroll-arkco');

      var offsetTop = -wrapper.offset().top + $(window).scrollTop();
      var offsetBottom = wrapper.offset().top - $(window).scrollTop() + wrapper.outerHeight() - box.outerHeight();

      if (offsetBottom > 0 && offsetTop < 0) {
          box.css({
              'top': 0
          });
      } else if (offsetBottom > 0 && offsetTop > 0) {
          box.css({
              'top': offsetTop + 'px'
          });
      } else {
          box.offset({
              'top': $(window).scrollTop() + offsetBottom
          });
      }

  });
</script> */}
    </div>
  );
};

export default Home;
