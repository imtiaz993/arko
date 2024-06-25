import "../../../public/css/style.css";
import "../../../public/css/books.css";
import "../../../public/css/colorFan.css";
import "../../../public/css/contact.css";
import "../../../public/css/card-home.css";
import "../../../public/css/about.css";

export const metadata = {
  title: "ARKCO | Services",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Services = () => {
  return (
    <div>
      <h1
        id="scroll-arkco"
        style="position: absolute; writing-mode: vertical-lr; font-size: 6vmax; color: #F7931E; transform: rotate(180deg); left: 5.5%; margin-top: 5%"
      >
        ARKCO
      </h1>
      <div
        id="services"
        class="flex-container"
        style="margin-top: 10%; margin-bottom: 10%;"
      >
        <div id="scroll-1" class="flex-item-left scrollFade" style="flex: 30%">
          <div id="services-header-desktop" style="position: relative;">
            <div style="transform: rotate(-90deg);">
              <h1 style="font-size: 5vmax">SERVICES</h1>
              <h1 style="font-size: 1.5vmax; margin: -15px 0; text-transform: uppercase">
                Forging connections by building bridges across every industry
                gap
              </h1>
              <p style="font-size: .75vmax; width: 25vmax">
                In construction, we employ advanced methodologies to ensure
                structural integrity, safety, and aesthetic appeal. Our
                demolition services are carried out with precision, minimizing
                disruptions and environmental impact. The project management
                aspect involves a meticulous coordination of resources,
                timelines, and stakeholders to facilitate a smooth workflow. By
                amalgamating these core services, Arkco not only constructs
                physical structures but also bridges that span the diverse
                challenges within the industry. This integrated approach allows
                us to navigate complexities, enhance communication, and deliver
                projects with a holistic understanding of the entire
                lifecycle—from concept to completion.
              </p>
            </div>
          </div>
          <div id="services-header-mobile">
            <h1 style="font-size: 6vmax">SERVICES</h1>
            <h1 style="font-size: 2vmax; text-transform: uppercase">
              Forging connections by building bridges across every industry gap
            </h1>
            <div style=" margin: auto; width: 65%">
              <p style="font-size: 1.5vmax; ">
                In construction, we employ advanced methodologies to ensure
                structural integrity, safety, and aesthetic appeal. Our
                demolition services are carried out with precision, minimizing
                disruptions and environmental impact. The project management
                aspect involves a meticulous coordination of resources,
                timelines, and stakeholders to facilitate a smooth workflow. By
                amalgamating these core services, Arkco not only constructs
                physical structures but also bridges that span the diverse
                challenges within the industry. This integrated approach allows
                us to navigate complexities, enhance communication, and deliver
                projects with a holistic understanding of the entire
                lifecycle—from concept to completion.
              </p>
            </div>
          </div>
        </div>
        <div class="flex-item-right scrollFade" style="flex: 70%">
          <div class="main">
            <ul id="bk-list" class="bk-list clearfix">
              <li id="book-6">
                <div class="bk-book book-1 bk-bookdefault">
                  <div class="bk-front bk-bookview">
                    <div
                      class="book-cover"
                      style="border-radius: 0 20px 20px 0;"
                    >
                      <div class="book-spine-front"></div>
                      <div class="band"></div>
                      <h1
                        class="book-title"
                        style="color: transparent; user-select: none"
                        draggable="false"
                      >
                        Our Services
                      </h1>
                      <div class="cardboard-front"></div>
                      <img
                        loading="lazy"
                        src="img/logobook.png"
                        class="book-cover-picture"
                        alt="cover"
                      />
                    </div>
                    <div
                      class="bk-cover-back"
                      style="border-radius: 20px 0 0 20px;"
                    >
                      <div
                        class="cover-back-cardboard"
                        style="border-radius: 20px 0 0 20px"
                      ></div>
                    </div>
                  </div>
                  <div
                    class="bk-page bk-bookview"
                    style="border-radius: 0 20px 20px 0;"
                  >
                    <div class="bk-content bk-content-current">
                      <h3 style="color: black">Design Proposals</h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Crafting comprehensive proposals outlining conceptual
                        design ideas for client review and consideration.
                      </p>
                    </div>
                    <div class="bk-content">
                      <h3 style="color: black">Schematic Design</h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Developing preliminary sketches and plans to illustrate
                        the overall design concept and spatial arrangement.
                      </p>
                    </div>
                    <div class="bk-content">
                      <h3 style="color: black">As-Built Condition Reviews</h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Assessing and documenting the current state of a
                        structure or space to inform design modifications or
                        renovations.
                      </p>
                    </div>
                    <div class="bk-content">
                      <h3 style="color: black">Interior Design</h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Creating aesthetically pleasing and functional interior
                        spaces through thoughtful selection of colors,
                        materials, and furnishings.
                      </p>
                    </div>
                    <div class="bk-content">
                      <h3 style="color: black">
                        Floor Plan and Design Documents
                      </h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Producing detailed floor plans and design documentation
                        that serve as a blueprint for construction and project
                        execution.
                      </p>
                    </div>
                    <div class="bk-content">
                      <h3 style="color: black">3D Visualization</h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        {" "}
                        Utilizing advanced technologies to create immersive
                        three-dimensional visual representations of design
                        concepts for better client understanding.
                      </p>
                    </div>

                    <div class="bk-content">
                      <h3 style="color: black">
                        Construction Management and Administration
                      </h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Overseeing the entire construction process, from
                        planning and coordination to execution and completion,
                        ensuring seamless project delivery.
                      </p>
                    </div>
                    <div class="bk-content">
                      <h3 style="color: black">Project Planning</h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Developing comprehensive plans outlining project scope,
                        timelines, and resource requirements to guide successful
                        project execution.
                      </p>
                    </div>
                    <div class="bk-content">
                      <h3 style="color: black">Procurement and Delivery</h3>
                      <p style="font-family: 'Tenorite', sans-serif;">
                        Managing the sourcing and delivery of materials,
                        equipment, and services essential for project
                        implementation.
                      </p>
                    </div>
                    <div class="ribbon"></div>
                  </div>
                  <div
                    class="bk-back bk-bookback"
                    style="border-radius: 20px 0 0 20px;"
                  >
                    <div style="height: 100%; width: 10%; position: absolute; background: #222222; right: 0"></div>
                    <div class="back-cardboard"></div>
                    <p class="back-text">
                      FORGING CONNECTIONS BY BUILDING BRIDGES ACROSS EVERY
                      INDUSTRY GAP
                    </p>
                  </div>
                  <div class="bk-right"></div>
                  <div class="bk-left">
                    <h2>
                      <span style="font-weight: bold; color: #000">
                        Our Services
                      </span>
                      <span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01
                      </span>
                    </h2>
                    <div class="spine-cardboard"></div>
                    <button class="bk-bookback arrow">➦</button>
                  </div>
                  <div class="bk-top"></div>
                  <div class="bk-bottom"></div>
                </div>
                <div class="bk-info"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <script>
  $(function () {

      Books.init();

  });
</script> */}
    </div>
  );
};

export default Services;
