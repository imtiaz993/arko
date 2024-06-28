const SideScroll = () => {
  return (
    <>
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
    </>
  );
};

export default SideScroll;
