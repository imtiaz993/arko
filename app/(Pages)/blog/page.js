import "../../../public/css/style.css";
import "../../../public/css/projects.css";
import "../../../public/css/blog.css";

export const metadata = {
  title: "ARKCO | Blog Posts",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const BlogDetails = () => {
  return (
    <div>
      {" "}
      <div id="projects" class="flex-container">
        <div id="scroll-1" class="flex-item-left scrollFade" style="flex: 30%">
          <h1
            id="scroll-arkco-1"
            style="position: fixed; writing-mode: vertical-lr; font-size: 6vmax; color: #F7931E; transform: rotate(180deg); left: 5%; top:26%"
          >
            ARKCO
          </h1>
          <div
            id="project-header-desktop"
            style="position: relative; margin-top: 65%"
          >
            <div style="transform: rotate(-90deg);">
              <h1 style="font-size: 5vmax">BLOG POSTS</h1>
              <h1 style="font-size: 1.5vmax; margin: -15px 0; text-transform: uppercase">
                excellence <br /> in work
              </h1>
              <p style="font-size: .75vmax; width: 20vmax">
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
          <div id="project-header-mobile" style="margin-top: 10vh">
            <h1 style="font-size: 6vmax">BLOG POSTS</h1>
            <h1 style="font-size: 2vmax; text-transform: uppercase">
              excellence <br /> in work
            </h1>
            <div style=" margin: auto; width: 65%">
              <p style="font-size: 1.5vmax; ">
                Excellence in work is a cornerstone of our commitment at Arkco.
                We strive to consistently deliver outstanding results, combining
                expertise, innovation, and dedication in every project we
                undertake.
              </p>
            </div>
          </div>
        </div>
        <div class="flex-item-right scrollFade" style="flex: 70%;">
          <div id="blog-posts" class="container"></div>
        </div>
      </div>
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
      {/* <script>
const BLOG_URL = 'https://azark-blog-backend.onrender.com/api/posts';

async function customFetch() {
  try {
      const res = await fetch(BLOG_URL);
      if (!res.ok) {
          throw new Error(`${res.status} : ${res.statusText}`)
      }

      const json = await res.json();
      return json;
  } catch (err) {
      console.error(err.message)
  }
}

const createListItem = (item) => {

  function rfc3986EncodeURIComponent (str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, escape);
  }

  if (item.categories.includes("arkco") && item.published === true) {
      const date = new Date(item.updatedAt);
      const formattedDate = date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()
      return `
      <div class="section" onclick="location.assign('blog-single.html?id=${rfc3986EncodeURIComponent(item.identifier)}');">
          <div  onclick="location.assign('blog-single.html?id=${rfc3986EncodeURIComponent(item.identifier)}');">
              <img src="${item.photo}"/>
              <h1>${item.title}</h1>
              <div>
                  <h2>${item.author}</h2>
                  <h2>${formattedDate}</h2>
              </div>
              <p>${item.clincher}</p>
          </div>

      </div>
`
  }
}

const getPosts = async () => {
  const data = await customFetch();
  const posts = data.reverse().map(posts => posts);
  const listItems = posts.map(t => createListItem(t)).join("")

  const insertBefore = (element, htmlString) => element.insertAdjacentHTML("afterbegin", htmlString);

  const element = document.getElementById("blog-posts");

  return insertBefore(element, `${listItems}`)
}

getPosts()


</script>
 */}
    </div>
  );
};

export default BlogDetails;
