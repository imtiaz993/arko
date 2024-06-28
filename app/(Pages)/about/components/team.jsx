"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Team = () => {
  const router = useRouter();
  return (
    <div className="container" style={{ flex: "40%" }}>
      <div className="card-column column-0">
        <div
          onClick={() => {
            router.push("/allen");
          }}
          style={{ cursor: "pointer" }}
          className="card card-color-0"
        >
          <div className="border"></div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            src="/img/allen_azarkian.png"
            alt="allen"
          />
          <h1>
            <b>Allen Azarkian</b> <br /> CEO and Founder
          </h1>
        </div>
      </div>
      <div className="card-column column-1">
        <div className="card card-color-1">
          <div className="border"></div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            src="https://www.aapc.nyc/img/pierre.png"
            alt="teammate"
          />
          <h1>
            <b>Pierre Tairouz</b> <br /> Design Team Director
          </h1>
        </div>
        <div className="card card-color-1">
          <div className="border"></div>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            src="/img/maggie.png"
            alt="teammate"
          />
          <h1>
            <b>Maggie Kay Croke</b> <br />
            Junior Designer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Team;
