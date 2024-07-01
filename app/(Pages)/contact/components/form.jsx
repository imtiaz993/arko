"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Form = () => {
  const [isContact, setIsContact] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && document.getElementById("file")) {
      var uploadField = document.getElementById("file");

      if (uploadField) {
        uploadField.onchange = function () {
          if (this.files[0].size > 2097152) {
            alert("File is too big!");
            this.value = "";
          }
        };
      }
    }
  }, [isContact]);
  return (
    <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
      <div>
        {isContact ? (
          <form
            className="form contact"
            id="form1"
            action="https://formsubmit.co/admin@arkco.nyc"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://www.arkco.nyc" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              src="/img/pencil.png"
              style={{
                position: "absolute",
                left: "-125px",
                width: "auto",
                height: "100%",
                rotate: "2deg",
                WebkitFilter: "drop-shadow(5px 5px 5px #222)",
                filter: "drop-shadow(5px 5px 5px #222)",
              }}
              draggable="false"
              alt="project"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="clipboard"
              src="/img/clipboard.png"
              draggable="false"
              style={{
                position: "absolute",
                width: "40%",
                height: "auto",
                top: "-15%",
                left: "0",
                right: "0",
                margin: "auto",
              }}
              alt="project"
            />
            <div
              className="contact-top"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "relative",
                zIndex: "90",
              }}
            >
              <h2>CONTACT US</h2>
              <h2
                id="joinform"
                onClick={() => {
                  setIsContact(false);
                }}
                style={{
                  border: "none",
                  textAlign: "right",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                JOIN US
              </h2>
            </div>
            <p type="NAME:">
              <input placeholder="Write your name here..." required />
            </p>
            <p type="SUBJECT:">
              <input placeholder="What is your message regarding..." required />
            </p>
            <p type="EMAIL:">
              <input
                placeholder="Let us know how to contact you back..."
                required
              />
            </p>
            <p type="MESSAGE:">
              <input placeholder="What would you like to tell us..." required />
            </p>
            <br />
            <button
              type="submit"
              className="button"
              style={{
                position: "absolute",
                right: "10%",
                transform: "scale(.8)",
              }}
            >
              Send Message
            </button>

            <div className="ribbon-contact">
              <span
                className="fa fa-location-arrow"
                onClick={() => {
                  window.open(
                    "https://maps.app.goo.gl/3S2kgXWk48vREADu9",
                    "_blank"
                  );
                }}
              ></span>
              <span
                className="fa fa-phone"
                onClick={() => {
                  window.location.href = "tel:212-547-9000";
                }}
              ></span>
              <span
                className="fa fa-envelope"
                onClick={() => {
                  window.location.href = "mailto:admin@arkco.nyc";
                }}
              ></span>
            </div>
          </form>
        ) : (
          <form
            className="form contact"
            id="form2"
            action="https://formsubmit.co/talent@aapc.nyc"
            method="POST"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="_next" value="https://www.aapc.nyc" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input
              type="hidden"
              name="_subject"
              value="ArkCo - Job Application Submission"
            />

            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              src="/img/pencil.png"
              style={{
                position: "absolute",
                left: "-125px",
                height: "100%",
                width: "auto",
                rotate: "2deg",
                WebkitFilter: "drop-shadow(5px 5px 5px #222)",
                filter: "drop-shadow(5px 5px 5px #222)",
              }}
              draggable="false"
              alt="project"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="clipboard"
              src="/img/clipboard.png"
              draggable="false"
              style={{
                position: "absolute",
                width: "40%",
                height: "auto",
                top: "-15%",
                left: "0",
                right: "0",
                margin: "auto",
              }}
              alt="project"
            />
            <div
              className="contact-top"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "relative",
                zIndex: "90",
              }}
            >
              <h2
                id="contactform"
                onClick={() => {
                  setIsContact(true);
                }}
                style={{
                  border: "none",
                  textAlign: "left",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                CONTACT US
              </h2>
              <h2 style={{ textAlign: "right" }}>JOIN US</h2>
            </div>
            <p type="NAME:">
              <input placeholder="Write your name here..." required />
            </p>
            <p type="SUBJECT:">
              <input
                placeholder="What position is your application regarding..."
                required
              />
            </p>
            <p type="RESUME/FILES:">
              <input
                type="file"
                id="file"
                multiple="multiple"
                accept="application/vnd.ms-word.document.macroEnabled.12, application/pdf, image/png, image/jpeg"
                required
              />
            </p>
            <p type="MESSAGE:">
              <input placeholder="What else would you like to tell us..." />
            </p>
            <br />
            <button
              type="submit"
              className="button"
              style={{
                position: "absolute",
                right: "10%",
                transform: "scale(.8)",
              }}
            >
              Apply
            </button>

            <div className="ribbon-contact">
              <span
                className="fa fa-location-arrow"
                onClick={() => {
                  window.open(
                    "https://maps.app.goo.gl/3S2kgXWk48vREADu9",
                    "_blank"
                  );
                }}
              ></span>
              <span
                className="fa fa-phone"
                onClick={() => {
                  window.location.href = "tel:212-547-9000";
                }}
              ></span>
              <span
                className="fa fa-envelope"
                onClick={() => {
                  window.location.href = "mailto:admin@arkco.nyc";
                }}
              ></span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
