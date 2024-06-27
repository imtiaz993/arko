import Script from "next/script";
import Calendly from "./components/calendly";

export const metadata = {
  title: "ARKCO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <link rel="author" href="Azark Inc" />
        <link rel="canonical" href="https://arkco.nyc/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f79421" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/oov2wcw.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body
        id="root"
        style={{
          width: "100vw",
          position: "relative",
          overflowX: "clip",
          height: "100%",
        }}
      >
        {children}
        <Calendly />
        <Script src="js/scrollfade-0.1.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js" />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" />
        <Script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js" />
      </body>
    </html>
  );
}
