"use client";

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
              We invite you to learn more about us and discover the vast ways
              that we can assist you. We look forward to the opportunity to
              discuss potential collaborations and build mutually beneficial
              partnerships.
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
              We invite you to learn more about us and discover the vast ways
              that we can assist you. We look forward to the opportunity to
              discuss potential collaborations and build mutually beneficial
              partnerships.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideScroll;
