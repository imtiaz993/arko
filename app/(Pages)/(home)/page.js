import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import SideScroll from "./components/side-scroll";
import Topper from "./components/topper";
import About from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "../../../public/css/style.css";
import "../../../public/css/books.css";
import "../../../public/css/colorFan.css";
import "../../../public/css/contact.css";
import "../../../public/css/card-home.css";
import "../../../public/css/about.css";

export const metadata = {
  title: "ARKCO | Home",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const Home = () => {
  return (
    <div>
      <Navbar />
      <Topper />
      <div id="side-scroll" style={{ position: "relative" }}>
        <SideScroll />
        <About />
        <Services />
        <Projects />
        <Contact />
        <h1 className="about-outline-text AOT-ark">ARK</h1>
        <h1 className="about-outline-text AOT-co">CO</h1>
      </div>
      <Footer />

      {/* 
<script>

  // Get all buttons with className="btn" inside the container
  var btns = document.getElementsByClassName("item");
  console.log(btns);

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
          var current = document.getElementsByClassName("active");

          // If there's no active class
          if (current.length > 0) {
              current[0].className = current[0].className.replace(" active", "");
          }

          // Add the active class to the current/clicked button
          this.className += " active";
      });
  }
</script>


<script>
  $(document).scroll(function () {
      var wrapper = $('#side-scroll');
      var box = $('#scroll-arkco');

      var offsetTop = -wrapper.offset().top + $(window).scrollTop();
      var offsetBottom = wrapper.offset().top - $(window).scrollTop() + wrapper.outerHeight() - box.outerHeight();

      if (offsetBottom > 0 && offsetTop < 0) {
          box.css({
              'top': 0
          });
      } else if (offsetBottom > 0 && offsetTop > 0) {
          box.css({
              'top': offsetTop + 'px'
          });
      } else {
          box.offset({
              'top': $(window).scrollTop() + offsetBottom
          });
      }

  });
</script> */}
    </div>
  );
};

export default Home;
