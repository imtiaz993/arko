"use client";

import { useRouter } from "next/navigation";

const Detail = ({ item }) => {
  const router = useRouter();
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
          onClick={() => router.back()}
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
          onClick={() => router.back()}
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

export default Detail;
