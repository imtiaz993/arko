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
              Forging connections by building bridges across every industry gap
            </h1>
            <p style={{ fontSize: ".75vmax", width: "25vmax" }}>
              In construction, we employ advanced methodologies to ensure
              structural integrity, safety, and aesthetic appeal. Our demolition
              services are carried out with precision, minimizing disruptions
              and environmental impact. The project management aspect involves a
              meticulous coordination of resources, timelines, and stakeholders
              to facilitate a smooth workflow. By amalgamating these core
              services, Arkco not only constructs physical structures but also
              bridges that span the diverse challenges within the industry. This
              integrated approach allows us to navigate complexities, enhance
              communication, and deliver projects with a holistic understanding
              of the entire lifecycle—from concept to completion.
            </p>
          </div>
        </div>
        <div id="services-header-mobile">
          <h1 style={{ fontSize: "6vmax" }}>SERVICES</h1>
          <h1 style={{ fontSize: "2vmax", textTransform: "uppercase" }}>
            Forging connections by building bridges across every industry gap
          </h1>
          <div style={{ margin: "auto", width: "65%" }}>
            <p style={{ fontSize: "1.5vmax" }}>
              In construction, we employ advanced methodologies to ensure
              structural integrity, safety, and aesthetic appeal. Our demolition
              services are carried out with precision, minimizing disruptions
              and environmental impact. The project management aspect involves a
              meticulous coordination of resources, timelines, and stakeholders
              to facilitate a smooth workflow. By amalgamating these core
              services, Arkco not only constructs physical structures but also
              bridges that span the diverse challenges within the industry. This
              integrated approach allows us to navigate complexities, enhance
              communication, and deliver projects with a holistic understanding
              of the entire lifecycle—from concept to completion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideScroll;
