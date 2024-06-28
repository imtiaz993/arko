import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import SideScroll from "./components/side-scroll";
import Form from "./components/form";
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
      <Navbar />
      <div id="contact" className="flex-container" style={{ flex: "30%" }}>
        <SideScroll />
        <Form />
      </div>
      <Footer />

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
