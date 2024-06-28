const SideScroll = () => {
  return (
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
            Excellence in work is a cornerstone of our commitment at Arkco. We
            strive to consistently deliver outstanding results, combining
            expertise, innovation, and dedication in every project we undertake.
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
            expertise, innovation, and dedication in every project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideScroll;
