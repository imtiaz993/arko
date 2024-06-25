import "../../../public/css/style.css";
import "../../../public/css/projects.css";
import "../../../public/css/allen.css";

export const metadata = {
  title: "ARKCO | Allen",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Allen = () => {
  return (
    <div>
      <div id="projects" className"flex-container">
        <div id="scroll-1" className"flex-item-left scrollFade" style="flex: 30%">
          <h1
            id="scroll-arkco-1"
            style="position: fixed; writing-mode: vertical-lr; font-size: 6vmax; color: #F7931E; transform: rotate(180deg); left: 5%; top:5%"
          >
            Allen Azarkian
          </h1>
          <div
            id="about-header-desktop"
            style="position: fixed; top: 45%; left: 2%"
          >
            <div style="transform: rotate(-90deg);">
              <h1 style="font-size: 1.5vmax; margin: -15px 0;">
                Founder/CEO, RA, AIA, Principal Architect
              </h1>
            </div>
          </div>
          <div id="about-header-mobile" style="margin-top: 10vh">
            <h1 style="font-size: 6vmax; color: #F7931E;">Allen Azarkian</h1>
            <h1 style="font-size: 2vmax; ">
              Founder/CEO, RA, AIA, Principal Architect
            </h1>
          </div>
        </div>
        <div className"flex-item-right scrollFade" style="flex: 70%">
          <h1 id="section1title">About Allen Azarkian</h1>

          <div id="container">
            <div id="floated">
              <div className"card card-color-0">
                <div className"border"></div>
                <img src="/img/allen_azarkian.png" alt="allen" />
                <h1>Allen Azarkian</h1>
              </div>
            </div>
            <h2 id="notfloated">
              Allen’s unique blend of business acumen has equipped him to
              revolutionize the real estate landscape, notably within the
              intricacies of New York City’s dynamic market. Boasting 23 years
              of experience, he has seamlessly navigated various roles in real
              estate, such as property manager, broker, landlord, builder, and
              renovator. He holds an undergraduate degree in Finance and a
              Master’s in Architecture.
              <br />
              <br />
              Under the banner of A__k, Allen has now introduced an innovative
              and comprehensive approach to property management, focusing on
              compliance with NYC agencies. A___k addresses everything from
              legal uses and accurate tax assessments to expediting use and
              occupancy changes and overseeing ground-up projects. While
              traditional practices involve multiple vendors and consultants,
              Allen has opted for a multifaceted system focused on streamlining
              processes, ensuring speed, efficiency, and cost-effectiveness.
              <br />
              <br />
              The primary challenge within the industry stems from disparities
              between the architect's vision, the contractor's execution, and
              the expeditor's documentation. These inconsistencies often result
              in considerable delays and expenses for clients. Recognizing the
              critical significance of time in the property sector, where delays
              quickly translate into missed business opportunities and financial
              setbacks, Allen strongly emphasizes strict adherence to New York
              City's building codes and zoning regulations.
              <br />
              <br />
              To address these challenges, Allen has built a cohesive team
              comprising individuals from various real estate components,
              streamlining processes and eliminating middlemen, delays, and
              incorrect practices. Over the years, he has surrounded himself
              with like-minded individuals and negotiated with a network of
              vendors, obtaining more than 13 licenses to expedite processes and
              reduce reliance on intermediaries, thus driving down costs and
              time.
              <br />
              <br />
              With a wealth of hands-on experience and a well-curated network of
              trusted vendors, Allen has meticulously created and nurtured an
              efficient, seamless, and frictionless process. He effectively
              eliminates intermediaries and erroneous practices by centralizing
              various facets of the real estate industry under one umbrella.
              Allen's proactive approach extends beyond the confines of New York
              City, as he actively participates in real estate endeavors across
              multiple states, thus gaining invaluable insights into diverse
              city agencies and permitting procedures.
              <br />
              <br />
              New York City has now enabled a functional online process for both
              approvals and compliance. While this technological sophistication
              offers more convenience, it also introduces new intricate layers
              of rules, laws, and regulations not found in most cities,
              necessitating time-sensitive filings to avoid penalties,
              ramifications, liens, etc.
              <br />
              <br />
              Allen’s strategic approach involves collecting all the necessary
              documents, ensuring accuracy, and setting up/implementing systems
              that are properly traced, monitored, and executed. Allen remains
              committed to leveraging technology and obtaining licenses
              expedites all relevant processes, reduces cost, and reduces the
              need for intermediaries, which ultimately benefits property owners
              and managers.
            </h2>
          </div>

          <h1 id="section2title">Associated Businesses</h1>

          <div id="abbox">
            <div id="business-section">
              <img
                id="azark"
                src="/img/AZARK_Logo%20%5Binverted%5D.png"
                alt="azark"
              />
              <img
                id="aapc"
                onclick="window.location.href = 'https://aapc.nyc'"
                src="/img/aapc.png"
                alt="aapc"
              />
              <img
                id="bvs"
                onclick="window.location.href = 'https://bvs.nyc'"
                src="/img/BVS%20White.png"
                alt="bvs"
              />
              <img
                id="violerts"
                onclick="window.location.href = 'https://www.violerts.com'"
                src="/img/Violerts%20Logo.png"
                alt="violerts"
              />
              <img
                id="vps"
                onclick="window.location.href = 'https://vps.nyc'"
                src="/img/VPS_Logo.png"
                alt="vps"
              />
            </div>
            <h2 id="polartext" style="text-align: center">
              For additional solutions, explore our network of trusted
              affiliates and partners.
            </h2>
          </div>
        </div>
      </div>
      {/* <script>
   
    gsap.to(".first", {
        duration: 1.5,
        delay: 0.5,
        top: "-100%",
        ease: "expo.inOut",
    });

    gsap.to(".second", {
        duration: 1.5,
        delay: 0.6,
        top: "-100%",
        ease: "expo.inOut",
    });

    gsap.to(".third", {
        duration: 1.5,
        delay: 0.7,
        top: "-100%",
        ease: "expo.inOut",
    });

</script> */}
    </div>
  );
};

export default Allen;
