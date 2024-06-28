import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import SideScroll from "./components/side-scroll";
import Listing from "./components/listing";
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

  return (
    <div>
      <Navbar />
      <div id="projects" className="flex-container">
        <SideScroll />
        <Listing filteredPosts={filteredPosts} />
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
