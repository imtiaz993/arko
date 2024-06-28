import Image from "next/image";

const Listing = () => {
  return (
    <>
      <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
        <div className="container">
          <div className="card-column column-0">
            <div className="card card-color-0">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/img/gallery/boxinggym.png"
              />
              <h1>60 w 125 [Boxing Gym]</h1>
            </div>
            <div className="card card-color-2">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/img/21OldWestbury/3.jpg"
              />
              <h1>21 Old Westbury [Wedding hall]</h1>
            </div>
          </div>
          <div className="card-column column-1">
            <div className="card card-color-1">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/img/gallery/krico.png"
              />
              <h1>772 9th [Krico]</h1>
            </div>
            <div className="card card-color-3">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/img/712w125/3.JPG"
              />
              <h1>712 West 125th Street</h1>
            </div>
          </div>
          <div className="card-column column-2">
            <div className="card card-color-1">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/img/130CutterMill/1.png"
              />
              <h1>130 Cutter Mill [Temple]</h1>
            </div>
            <div className="card card-color-3">
              <div className="border"></div>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src="/img/gotham/1.JPEG"
              />
              <h1>1356 Broadway [Gotham Hall]</h1>
            </div>
          </div>
        </div>
      </div>

      <div id="cover" className="cover"></div>

      <div id="open-content" className="open-content">
        <a href="#" id="close-content" className="close-content">
          <span className="x-1"></span>
          <span className="x-2"></span>
        </a>
        <Image
          width={0}
          height={0}
          sizes="100vw"
          id="open-content-image"
          src=""
        />
        <div className="text-inside" id="open-content-text"></div>
      </div>
    </>
  );
};

export default Listing;
