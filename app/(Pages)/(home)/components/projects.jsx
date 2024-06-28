import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
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
              Excellence in work is a cornerstone of our commitment at Arkco. We
              strive to consistently deliver outstanding results, combining
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
              Excellence in work is a cornerstone of our commitment at Arkco. We
              strive to consistently deliver outstanding results, combining
              expertise, innovation, and dedication in every project we
              undertake.
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
                careerists was a crucial aspect in the meticulous design of this
                space.
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
                dedicated team thoughtfully prioritized the user experience and
                needs. Our commitment is to ensure the seamless operation of
                this space, harmoniously embodying the beauty of beliefs in
                every corner.
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
                21 Old Westbury underwent a carefully curated transformation,
                meticulously tailored to a demanding schedule. Our objective was
                to elevate the already majestic spaces, infusing them with a
                golden touch that could effortlessly cater to the visions of
                brides and various events.
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
                1356 Broadway stands as a building unlike any other, steeped in
                multiple layers of history. As a protected landmark. We
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
  );
};

export default Projects;
