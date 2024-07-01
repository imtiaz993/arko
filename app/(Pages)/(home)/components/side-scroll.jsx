"use client";
import { useEffect } from "react";
import $ from "jquery";

const SideScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      var wrapper = $("#side-scroll");
      var box = $("#scroll-arkco");

      var offsetTop = -wrapper.offset().top + $(window).scrollTop();
      var offsetBottom =
        wrapper.offset().top -
        $(window).scrollTop() +
        wrapper.outerHeight() -
        box.outerHeight();

      if (offsetBottom > 0 && offsetTop < 0) {
        box.css({
          top: 0,
        });
      } else if (offsetBottom > 0 && offsetTop > 0) {
        box.css({
          top: offsetTop + "px",
        });
      } else {
        box.offset({
          top: $(window).scrollTop() + offsetBottom,
        });
      }
    };

    $(window).on("scroll", handleScroll);

    handleScroll();

    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);

  return (
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
  );
};

export default SideScroll;
