"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PopupWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupWidget),
  {
    ssr: false,
  }
);

const Calendly = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.getElementById("root"));
  }, []);

  return (
    <PopupWidget
      rootElement={rootElement}
      url="https://calendly.com/general-services"
      text="Free Consultation"
      color="#F7931E"
      textColor="#ffffff"
      branding={false}
      zIndex="100"
    />
  );
};

export default Calendly;
