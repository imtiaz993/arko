import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import "../../../public/css/style.css";
import "../../../public/css/projects.css";
import "../../../public/css/blog.css";

export const metadata = {
  title: "ARKCO | Blog Posts",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const BlogDetails = async () => {
  const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts";
  let filteredPosts;

  try {
    const res = await fetch(BLOG_URL);
    if (!res.ok) {
      throw new Error(`${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    filteredPosts = data
      .reverse()
      .filter((post) => post.categories.includes("bvs") && post.published);
  } catch (e) {
    if (e.data) {
      return { status: e.status, data: e.data };
    }
  }

  const createListItem = (item) => {
    function rfc3986EncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, escape);
    }
    if (item.categories.includes("arkco") && item.published === true) {
      const date = new Date(item.updatedAt);
      const formattedDate = `${date.getDate()} ${date.toLocaleString(
        "default",
        { month: "long" }
      )} ${date.getFullYear()}`;
      return (
        <div
          className="section"
          // onClick={() =>
          //   router.push(`/blog/${rfc3986EncodeURIComponent(post.identifier)}`)
          // }
        >
          <div>
            <img src={item.photo} alt={item.title} />
            <h1>{item.title}</h1>
            <div>
              <h2>{item.author}</h2>
              <h2>{formattedDate}</h2>
            </div>
            <p>{item.clincher}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div id="projects" className="flex-container">
        <div
          id="scroll-1"
          className="flex-item-left scrollFade"
          style={{ flex: "30%" }}
        >
          <h1
            id="scroll-arkco-1"
            style={{
              position: "fixed",
              writingMode: "vertical-lr",
              fontSize: "6vmax",
              color: "#F7931E",
              transform: "rotate(180deg)",
              left: "5%",
              top: "26%",
            }}
          >
            ARKCO
          </h1>
          <div
            id="project-header-desktop"
            style={{ position: "relative", marginTop: "65%" }}
          >
            <div style={{ transform: "rotate(-90deg)" }}>
              <h1 style={{ fontSize: "5vmax" }}>BLOG POSTS</h1>
              <h1
                style={{
                  fontSize: "1.5vmax",
                  margin: "-15px 0",
                  textTransform: "uppercase",
                }}
              >
                excellence <br /> in work
              </h1>
              <p style={{ fontSize: ".75vmax", width: "20vmax" }}>
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
          <div id="project-header-mobile" style={{ marginTop: "10vh" }}>
            <h1 style={{ fontSize: "6vmax" }}>BLOG POSTS</h1>
            <h1 style={{ fontSize: "2vmax", textTransform: "uppercase" }}>
              excellence <br /> in work
            </h1>
            <div style={{ margin: "auto", width: "65%" }}>
              <p style={{ fontSize: "1.5vmax" }}>
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
          <div id="blog-posts" className="container">
            {filteredPosts.map((post) => createListItem(post))}
          </div>
        </div>
      </div>
      <Footer />
      {/* <script>
gsap.to(".first", {
  duration: 1.5,
  delay: 0.5,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".second", {
  duration: 1.5,
  delay: 0.6,
  top: "-100%",
  ease: "expo.inOut",
});

gsap.to(".third", {
  duration: 1.5,
  delay: 0.7,
  top: "-100%",
  ease: "expo.inOut",
});

</script> */}
    </div>
  );
};

export default BlogDetails;
