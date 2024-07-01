"use client";

import Image from "next/image";

const AssociatedBussiness = () => {
  return (
    <div>
      <h1 id="section2title">Associated Businesses</h1>
      <div id="abbox">
        <div id="business-section">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            id="azark"
            src="/img/AZARK_Logo%20%5Binverted%5D.png"
            alt="azark"
          />
          <Image
            width={0}
            height={0}
            sizes="100vw"
            id="aapc"
            onClick={() => {
              window.location.href = "https://aapc.nyc";
            }}
            src="/img/aapc.png"
            alt="aapc"
          />
          <Image
            width={0}
            height={0}
            sizes="100vw"
            id="bvs"
            onClick={() => {
              window.location.href = "https://bvs.nyc";
            }}
            src="/img/BVS%20White.png"
            alt="bvs"
          />
          <Image
            width={0}
            height={0}
            sizes="100vw"
            id="violerts"
            onClick={() => {
              window.location.href = "https://www.violerts.com";
            }}
            src="/img/Violerts%20Logo.png"
            alt="violerts"
          />
          <Image
            width={0}
            height={0}
            sizes="100vw"
            id="vps"
            onClick={() => {
              window.location.href = "https://vps.nyc";
            }}
            src="/img/VPS_Logo.png"
            alt="vps"
          />
        </div>
        <h2 id="polartext" style={{ textAlign: "center" }}>
          For additional solutions, explore our network of trusted affiliates
          and partners.
        </h2>
      </div>
    </div>
  );
};

export default AssociatedBussiness;
