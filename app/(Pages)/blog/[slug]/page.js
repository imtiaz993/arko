import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
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

  const CreateListItem = ({ item }) => {
    const formattedCreated = new Date(item.createdAt).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );

    const formattedUpdated = new Date(item.updatedAt).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );

    if (formattedCreated !== formattedUpdated) {
      return (
        <div
          style={{
            position: "relative",
            width: "80vw",
            background: "#F7931E",
            marginLeft: "9%",
          }}
        >
          <h1
            style={{
              position: "absolute",
              top: 0,
              right: "2%",
              cursor: "pointer",
            }}
            // onClick={() => history.back()}
          >
            X
          </h1>
          <img
            src={item.photo}
            style={{
              width: "80%",
              height: "60vh",
              marginTop: "5%",
              marginLeft: "-3%",
              objectFit: "cover",
            }}
          />
          <h1 style={{ padding: "0 3%" }}>{item.title}</h1>
          <h3 style={{ padding: "0 3%" }}>
            {item.author} | Created: {formattedCreated} | Updated:{" "}
            {formattedUpdated}
          </h3>
          <div
            id="the-text"
            style={{ padding: "0 3% 3%" }}
            dangerouslySetInnerHTML={{ __html: item.desc }}
          ></div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            position: "relative",
            width: "80vw",
            background: "#F7931E",
            marginLeft: "9%",
          }}
        >
          <h1
            style={{
              position: "absolute",
              top: 0,
              right: "2%",
              cursor: "pointer",
            }}
            // onClick={() => history.back()}
          >
            X
          </h1>
          <img
            src={item.photo}
            style={{
              width: "80%",
              height: "60vh",
              marginTop: "5%",
              marginLeft: "-3%",
              objectFit: "cover",
            }}
          />
          <h1 style={{ padding: "0 3%" }}>{item.title}</h1>
          <h3 style={{ padding: "0 3%" }}>
            {item.author} | Created: {formattedCreated}
          </h3>
          <div
            id="the-text"
            style={{ padding: "0 3% 3%" }}
            dangerouslySetInnerHTML={{ __html: item.desc }}
          ></div>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div id="blog-posts">
        <CreateListItem item={post} />
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
