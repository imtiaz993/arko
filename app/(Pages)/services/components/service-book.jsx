import Image from "next/image";

const ServiceBook = () => {
  return (
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
                    Crafting comprehensive proposals outlining conceptual design
                    ideas for client review and consideration.
                  </p>
                </div>
                <div className="bk-content">
                  <h3 style={{ color: "black" }}>Schematic Design</h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    Developing preliminary sketches and plans to illustrate the
                    overall design concept and spatial arrangement.
                  </p>
                </div>
                <div className="bk-content">
                  <h3 style={{ color: "black" }}>As-Built Condition Reviews</h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    Assessing and documenting the current state of a structure
                    or space to inform design modifications or renovations.
                  </p>
                </div>
                <div className="bk-content">
                  <h3 style={{ color: "black" }}>Interior Design</h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    Creating aesthetically pleasing and functional interior
                    spaces through thoughtful selection of colors, materials,
                    and furnishings.
                  </p>
                </div>
                <div className="bk-content">
                  <h3 style={{ color: "black" }}>
                    Floor Plan and Design Documents
                  </h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    Producing detailed floor plans and design documentation that
                    serve as a blueprint for construction and project execution.
                  </p>
                </div>
                <div className="bk-content">
                  <h3 style={{ color: "black" }}>3D Visualization</h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    {" "}
                    Utilizing advanced technologies to create immersive
                    three-dimensional visual representations of design concepts
                    for better client understanding.
                  </p>
                </div>

                <div className="bk-content">
                  <h3 style={{ color: "black" }}>
                    Construction Management and Administration
                  </h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    Overseeing the entire construction process, from planning
                    and coordination to execution and completion, ensuring
                    seamless project delivery.
                  </p>
                </div>
                <div className="bk-content">
                  <h3 style={{ color: "black" }}>Project Planning</h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    Developing comprehensive plans outlining project scope,
                    timelines, and resource requirements to guide successful
                    project execution.
                  </p>
                </div>
                <div className="bk-content">
                  <h3 style={{ color: "black" }}>Procurement and Delivery</h3>
                  <p style={{ fontFamily: "'Tenorite', sans-serif" }}>
                    Managing the sourcing and delivery of materials, equipment,
                    and services essential for project implementation.
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
                  FORGING CONNECTIONS BY BUILDING BRIDGES ACROSS EVERY INDUSTRY
                  GAP
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
  );
};

export default ServiceBook;
