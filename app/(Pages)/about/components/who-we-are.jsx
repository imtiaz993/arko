import Image from "next/image";

const WhoWeAre = () => {
  return (
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
            disjointed nature of the industry, ArkCo has dedicated efforts to
            further develop and streamline the process of delivering turn key
            commercial spaces swiftly. Our commitment is reflected in the
            implementation of multiple innovative systems and technologies, that
            advances and empower us to collaborate seamlessly with you,
            facilitating the creation of all your projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
