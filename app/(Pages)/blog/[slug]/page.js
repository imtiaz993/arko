import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import Detail from "./components/detail";
import "../../../../public/css/style.css";
import "../../../../public/css/projects.css";
import "../../../../public/css/blog.css";

const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts/title/";

export async function generateMetadata({ params }) {
  const ID = params["slug"];
  const res = await fetch(BLOG_URL + ID);
  const json = await res.json();
  const post = json;

  return {
    title: "ARKCO | " + post?.title || "",
    description:
      "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
    keywords: post?.keywords || "Construction, ArkCo, Building, Design",
  };
}

const BlogDetails = async ({ params }) => {
  const ID = params["slug"];
  let post;

  try {
    const res = await fetch(BLOG_URL + ID);
    const json = await res.json();
    post = json;
  } catch (e) {
    if (e.data) {
      return { status: e.status, data: e.data };
    }
  }

  return (
    <div>
      <Navbar />
      <div id="blog-posts">
        <Detail item={post} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
