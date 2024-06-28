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

      {/* <script type="text/javascript">
  var image = document.getElementById("mainPhoto1");
  var currentPos = 0;
  var images = ["img/712w125/1.JPG", "img/712w125/2.JPG", "img/712w125/3.JPG", "img/712w125/4.JPG"]

  function volgendefoto() {
      if (++currentPos >= images.length)
          currentPos = 0;

      image.style.opacity = 0;
      setTimeout(function () {
          image.src = images[currentPos];

          setTimeout(function () {
              image.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto, 5000);
</script>
<script type="text/javascript">
  var image2 = document.getElementById("#mainPhoto2");
  var currentPos2 = 0;
  var images2 = ["img/130CutterMill/1.png", "img/130CutterMill/2.png", "img/130CutterMill/3.png", "img/130CutterMill/4.png", "img/130CutterMill/5.png", "img/130CutterMill/6.png", "img/130CutterMill/7.png", "img/130CutterMill/8.png", "img/130CutterMill/9.png"]

  function volgendefoto2() {
      if (++currentPos2 >= images2.length)
          currentPos2 = 0;

      image2.style.opacity = 0;
      setTimeout(function () {
          image2.src = images2[currentPos2];

          setTimeout(function () {
              image2.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto2, 5000);
</script>
<script type="text/javascript">
  var image3 = document.getElementById("#mainPhoto3");
  var currentPos3 = 0;
  var images3 = ["img/21OldWestbury/1.jpg", "img/21OldWestbury/2.jpg", "img/21OldWestbury/3.jpg", "img/21OldWestbury/4.jpg", "img/21OldWestbury/5.jpeg", "img/21OldWestbury/6.jpg", "img/21OldWestbury/7.jpeg", "img/21OldWestbury/8.jpeg", "img/21OldWestbury/9.jpg"]

  function volgendefoto3() {
      if (++currentPos3 >= images3.length)
          currentPos3 = 0;

      image3.style.opacity = 0;
      setTimeout(function () {
          image3.src = images3[currentPos3];

          setTimeout(function () {
              image3.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto3, 5000);
</script>
<script type="text/javascript">
  var image4 = document.getElementById("#mainPhoto4");
  var currentPos4 = 0;
  var images4 = ["img/gotham/1.JPEG", "img/gotham/2.JPEG", "img/gotham/3.JPEG", "img/gotham/4.JPEG", "img/gotham/5.JPEG", "img/gotham/6.JPEG", "img/gotham/7.JPEG", "img/gotham/8.JPEG", "img/gotham/9.JPEG"]

  function volgendefoto4() {
      if (++currentPos4 >= images4.length)
          currentPos4 = 0;

      image4.style.opacity = 0;
      setTimeout(function () {
          image4.src = images4[currentPos4];

          setTimeout(function () {
              image4.style.opacity = 1;
          }, 500);
      }, 950);
  }

  setInterval(volgendefoto4, 5000);
</script>
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
  $(function () {

      Books.init();

  });
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
