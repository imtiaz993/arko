import "../../../../public/css/style.css";
import "../../../../public/css/projects.css";
import "../../../../public/css/blog.css";

export const metadata = {
  title: "ARKCO | Blog Post",
  description:
    "We strategically integrate our expertise in construction, and project management to offer seamless solutions.",
  keywords: "Construction, ArkCo, Building, Design",
};

const BlogDetails = () => {
  return (
    <div>
      <div id="blog-posts"></div>

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
    function GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }

    const BLOG_URL = 'https://azark-blog-backend.onrender.com/api/posts/title/';
    const ID = GetURLParameter('id').toString();

    async function customFetch() {
        try {
            const res = await fetch(BLOG_URL + ID);
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
        if (item.categories.includes("arkco")) {
            document.title = `ArkCo | ${item.title}`;
            document.querySelector('meta[name="keywords"]').setAttribute("content", item.keywords);
            // const date = new Date(item.updatedAt);
            // const formattedDate = date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()
            const formattedCreated = new Date(item.createdAt).toLocaleDateString('en-US', {
                month: "long",  // Use "short" for abbreviated month
                day: "numeric",
                year: "numeric",
            })
            const formattedUpdated =  new Date(item.updatedAt).toLocaleDateString('en-US', {
                month: "long",  // Use "short" for abbreviated month
                day: "numeric",
                year: "numeric",
            })

            if (formattedCreated !== formattedUpdated) {
                return ` <div style="position: relative; width: 80vw; background: #F7931E; margin-left: 9%">
                    <h1 style="position: absolute; top: 0; right: 2%; cursor: pointer;" onclick="history.back()">X</h1>
                    <img src="${item.photo}" style="width: 80%; height: 60vh; margin-top: 5%; margin-left: -3%; object-fit: cover"/>
                    <h1 style="padding: 0 3%">${item.title}</h1>
                    <h3 style="padding: 0 3% ">${item.author} | Created: ${formattedCreated} | Updated: ${formattedUpdated}</h3>
                    <div id="the-text" style="padding: 0 3% 3%">${item.desc}</div>

                     </div>
                </div>`

            }
            return ` <div style="position: relative; width: 80vw; background: #F7931E; margin-left: 9%">
                        <h1 style="position: absolute; top: 0; right: 2%; cursor: pointer;" onclick="history.back()">X</h1>
                        <img src="${item.photo}" style="width: 80%; height: 60vh; margin-top: 5%; margin-left: -3%; object-fit: cover"/>
                        <h1 style="padding: 0 3%">${item.title}</h1>
                        <h3 style="padding: 0 3% ">${item.author} | Created: ${formattedCreated}</h3>
                        <div id="the-text" style="padding: 0 3% 3%">${item.desc}</div>

                         </div>
                    </div>`



        }
    }

    const getPosts = async () => {
        const data = await customFetch();
        const post = createListItem(data)


        const insertBefore = (element, htmlString) => element.insertAdjacentHTML("afterbegin", htmlString);

        const element = document.getElementById("blog-posts");

        return insertBefore(element, `${post}`)
    }

    getPosts()

</script> */}
    </div>
  );
};

export default BlogDetails;
