"use client";

import { useRouter } from "next/navigation";

const Listing = ({ filteredPosts }) => {
  const router = useRouter();

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
          onClick={() =>
            router.push(`/blog/${rfc3986EncodeURIComponent(item.identifier)}`)
          }
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
    <div className="flex-item-right scrollFade" style={{ flex: "70%" }}>
      <div id="blog-posts" className="container">
        {filteredPosts.map((post) => createListItem(post))}
      </div>
    </div>
  );
};

export default Listing;
