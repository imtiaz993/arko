import "../../../public/css/style.css";
import "../../../public/css/books.css";
import "../../../public/css/colorFan.css";
import "../../../public/css/contact.css";
import "../../../public/./css/card-home.css";
import "../../../public/./css/about.css";

export const metadata = {
  title: "ARKCO | Contact Us",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Contact = () => {
  return (
    <div>
      <h1
        id="scroll-arkco"
        style="position: absolute; writing-mode: vertical-lr; font-size: 6vmax; color: #F7931E; transform: rotate(180deg); left: 5.5%; margin-top: 5%"
      >
        ARKCO
      </h1>
      <div id="contact" class="flex-container" style="flex: 30%">
        <div id="scroll-3" class="flex-item-left scrollFade" style="flex: 30%">
          <div id="contact-header-desktop" style="position: relative;">
            <div style="transform: rotate(-90deg);">
              <h1 style="font-size: 5vmax">CONTACT</h1>
              <h1 style="font-size: 1.5vmax; margin: -15px 0; cursor: pointer">
                <b onclick="window.location.href = 'tel:212-547-9000'">
                  CALL US
                </b>{" "}
                <br />{" "}
                <b onclick="window.location.href = 'mailto:admin@arkco.nyc';">
                  EMAIL US
                </b>
              </h1>
              <p style="font-size: .75vmax; width: 20vmax">
                We invite you to learn more about us and discover the vast ways
                that we can assist you. We look forward to the opportunity to
                discuss potential collaborations and build mutually beneficial
                partnerships.
              </p>
            </div>
          </div>
          <div id="contact-header-mobile" style="margin-top: 15vh">
            <h1 style="font-size: 6vmax">CONTACT</h1>
            <h1 style="font-size: 2vmax; ">
              CALL US <br /> EMAIL US
            </h1>
            <div style=" margin: auto; width: 65%">
              <p style="font-size: 1.5vmax; ">
                We invite you to learn more about us and discover the vast ways
                that we can assist you. We look forward to the opportunity to
                discuss potential collaborations and build mutually beneficial
                partnerships.
              </p>
            </div>
          </div>
        </div>
        <div class="flex-item-right scrollFade" style="flex: 70%">
          <div>
            <form
              class="form contact"
              id="form1"
              action="https://formsubmit.co/admin@arkco.nyc"
              method="POST"
            >
              <input type="hidden" name="_next" value="https://www.arkco.nyc" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style="display:none" />

              <img
                loading="lazy"
                src="img/pencil.png"
                style="position: absolute; left: -125px; height: 100%; rotate: 2deg; -webkit-filter: drop-shadow(5px 5px 5px #222); filter: drop-shadow(5px 5px 5px #222);"
                draggable="false"
                alt="project"
              />
              <img
                loading="lazy"
                class="clipboard"
                src="img/clipboard.png"
                draggable="false"
                style="position:absolute; width: 40%; top: -15%; left: 0; right: 0; margin: auto"
                alt="project"
              />
              <div
                class="contact-top"
                style="display: flex; flex-direction: row; justify-content: space-between; position: relative; z-index: 90"
              >
                <h2>CONTACT US</h2>
                <h2
                  id="joinform"
                  style="border: none; text-align: right; color: black; cursor: pointer"
                >
                  JOIN US
                </h2>
              </div>
              <p type="NAME:">
                <input placeholder="Write your name here..." required />
              </p>
              <p type="SUBJECT:">
                <input
                  placeholder="What is your message regarding..."
                  required
                />
              </p>
              <p type="EMAIL:">
                <input
                  placeholder="Let us know how to contact you back..."
                  required
                />
              </p>
              <p type="MESSAGE:">
                <input
                  placeholder="What would you like to tell us..."
                  required
                />
              </p>
              <br />
              <button
                type="submit"
                class="button"
                style="position: absolute; right: 10%; transform: scale(.8)"
              >
                Send Message
              </button>

              <div class="ribbon-contact">
                <span
                  class="fa fa-location-arrow"
                  onclick="window.open('https://maps.app.goo.gl/3S2kgXWk48vREADu9', '_blank')"
                ></span>
                <span
                  class="fa fa-phone"
                  onclick="window.location.href = 'tel:212-547-9000'"
                ></span>
                <span
                  class="fa fa-envelope"
                  onclick="window.location.href = 'mailto:admin@arkco.nyc';"
                ></span>
              </div>
            </form>
            <form
              class="form contact"
              id="form2"
              action="https://formsubmit.co/talent@aapc.nyc"
              method="POST"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="_next" value="https://www.aapc.nyc" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="text" name="_honey" style="display:none" />
              <input
                type="hidden"
                name="_subject"
                value="ArkCo - Job Application Submission"
              />

              <img
                loading="lazy"
                src="img/pencil.png"
                style="position: absolute; left: -125px; height: 100%; rotate: 2deg; -webkit-filter: drop-shadow(5px 5px 5px #222); filter: drop-shadow(5px 5px 5px #222);"
                draggable="false"
                alt="project"
              />
              <img
                loading="lazy"
                class="clipboard"
                src="img/clipboard.png"
                draggable="false"
                style="position:absolute; width: 40%; top: -15%; left: 0; right: 0; margin: auto"
                alt="project"
              />
              <div
                class="contact-top"
                style="display: flex; flex-direction: row; justify-content: space-between; position: relative; z-index: 90"
              >
                <h2
                  id="contactform"
                  style="border: none; text-align: left; color: black; cursor: pointer"
                >
                  CONTACT US
                </h2>
                <h2 style="text-align: right">JOIN US</h2>
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
                class="button"
                style="position: absolute; right: 10%; transform: scale(.8)"
              >
                Apply
              </button>

              <div class="ribbon-contact">
                <span
                  class="fa fa-location-arrow"
                  onclick="window.open('https://maps.app.goo.gl/3S2kgXWk48vREADu9', '_blank')"
                ></span>
                <span
                  class="fa fa-phone"
                  onclick="window.location.href = 'tel:212-547-9000'"
                ></span>
                <span
                  class="fa fa-envelope"
                  onclick="window.location.href = 'mailto:admin@arkco.nyc';"
                ></span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <script>
  var joinform = document.getElementById('joinform');
  var contactform = document.getElementById('contactform');
  var form = document.getElementById('form1');
  var form2 = document.getElementById('form2');
  joinform.onclick = function () {
      form.style.display = 'none';
      form2.style.display = 'block'
  }
  contactform.onclick = function () {
      form2.style.display = 'none';
      form.style.display = 'block'
  }

  var uploadField = document.getElementById("file");

  uploadField.onchange = function() {
      if(this.files[0].size > 2097152){
          alert("File is too big!");
          this.value = "";
      };
  };
</script> */}
    </div>
  );
};

export default Contact;
