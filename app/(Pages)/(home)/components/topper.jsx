import Image from "next/image";

const Topper = () => {
  return (
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
  );
};

export default Topper;
